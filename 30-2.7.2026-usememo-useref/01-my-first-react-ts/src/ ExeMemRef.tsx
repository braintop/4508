import { useMemo, useRef, useState } from "react";

export default function FastSearch() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // יצירת הרשימה פעם אחת בלבד
  const numbers = useMemo(() => {
    const arr: number[] = [];

    for (let i = 1; i <= 1000; i++) {
      arr.push(i);
    }

    return arr;
  }, []);

  // סינון הרשימה רק כאשר החיפוש משתנה
  const filteredNumbers = useMemo(() => {
    console.log("סיננתי!");

    return numbers.filter((n) => String(n).includes(search));
  }, [numbers, search]);

  function clearSearch() {
    setSearch("");
    inputRef.current?.focus();
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1>חיפוש מהיר</h1>

      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="חפש מספר..."
      />

      <button onClick={clearSearch}>
        נקה
      </button>

      <button onClick={() => setDarkMode(!darkMode)}>
        מצב כהה
      </button>

      <p>נמצאו {filteredNumbers.length} מספרים</p>

      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}