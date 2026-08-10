import { useEffect, useState } from "react";
import type {
  Category,
  Drink,
  DrinkDetails,
  HistoryItem,
} from "../types";

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<DrinkDetails | null>(null);
   

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );

      const data = await response.json();

      setCategories(data.drinks);
    } catch (error) {
      console.log("Error loading categories:", error);
    }
  }

  async function handleCategoryChange(category: string) {
    if (!category) {
      setDrinks([]);
      return;
    }

    try {
      setLoading(true);
      setSelectedDrink(null);

      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );

      const data = await response.json();

      const firstTenDrinks: Drink[] = data.drinks.slice(0, 10);

      setDrinks(firstTenDrinks);

      saveToHistory(category);
    } catch (error) {
      console.log("Error loading drinks:", error);
    } finally {
      setLoading(false);
    }
  }

  async function getDrinkDetails(id: string) {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const data = await response.json();

      setSelectedDrink(data.drinks[0]);
    } catch (error) {
      console.log("Error loading drink details:", error);
    }
  }

  function saveToHistory(category: string) {
    const newItem: HistoryItem = {
      date: new Date().toLocaleString(),
      category: category,
    };

    const oldHistory: HistoryItem[] = JSON.parse(
      localStorage.getItem("cocktailHistory") || "[]"
    );

    oldHistory.push(newItem);

    localStorage.setItem(
      "cocktailHistory",
      JSON.stringify(oldHistory)
    );
  }

  return (
    <div className="page">
      <h1>Cocktail Explorer</h1>

      <div className="search-area">
        <label>Select Category</label>

        <select
          defaultValue=""
          onChange={(event) =>
            handleCategoryChange(event.target.value)
          }
        >
          <option value="" disabled>
            Select category
          </option>

          {categories.map((category) => (
            <option
              key={category.strCategory}
              value={category.strCategory}
            >
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}

      <div className="drinks-container">
        {drinks.map((drink) => (
          <div className="drink-card" key={drink.idDrink}>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />

            <h2>{drink.strDrink}</h2>

            <p>
              <strong>ID:</strong> {drink.idDrink}
            </p>

            <button
              onClick={() =>
                getDrinkDetails(drink.idDrink)
              }
            >
              More Details
            </button>
          </div>
        ))}
      </div>

      {selectedDrink && (
        <div className="details-card">
          <h2>{selectedDrink.strDrink}</h2>

          <img
            src={selectedDrink.strDrinkThumb}
            alt={selectedDrink.strDrink}
          />

          <p>
            <strong>Category:</strong>{" "}
            {selectedDrink.strCategory}
          </p>

          <p>
            <strong>Glass:</strong>{" "}
            {selectedDrink.strGlass}
          </p>

          <p>
            <strong>Instructions:</strong>{" "}
            {selectedDrink.strInstructions}
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;