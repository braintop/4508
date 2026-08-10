export interface Category {
    strCategory: string;
  }
  
  export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }
  
  export interface DrinkDetails {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
  }
  export interface HistoryItem {
    date: string;
    category: string;
  }