import type { HistoryItem } from "../types";
import { useState, useEffect } from "react";
export default function History() {

    const [history, setHistory] = useState<HistoryItem[]>([]);
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem("movieHistory") || "[]");
        if (savedHistory.length > 0) {
            setHistory(savedHistory);
        }
    }, []);
    function clearHistory() {
        localStorage.removeItem("movieHistory");
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
                  <th>Genre</th>
                </tr>
              </thead>
  
              <tbody>
                {history.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.genre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            <button onClick={clearHistory}>Clear History</button>
          </>
        )}
      </div>
      );
}