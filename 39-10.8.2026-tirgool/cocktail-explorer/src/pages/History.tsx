import { useEffect, useState } from "react";
import type { HistoryItem } from "../types";

export default function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem(
      "cocktailHistory"
    );

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  function clearHistory() {
    localStorage.removeItem("cocktailHistory");
    setHistory([]);
  }

  return (
    <div className="page">
      <h1>Search History</h1>

      {history.length === 0 ? (
        <p>No searches yet.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Category</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={clearHistory}>
            Clear History
          </button>
        </>
      )}
    </div>
  );
}

