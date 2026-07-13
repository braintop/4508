import { useState } from "react";

export default function RecommendationsPage() {
    const [genre, setGenre] = useState("");
    const [age, setAge] = useState("");
    const [mood, setMood] = useState("");
    const [recommendation, setRecommendation] = useState("");

    function getRecommendation() {
        if (genre === "comedy") {
            setRecommendation(
                "המלצה: The Mask. סרט קומדיה קליל, מצחיק ומתאים למצב רוח טוב."
            );
        } else if (genre === "action") {
            setRecommendation(
                "המלצה: Avatar. סרט אקשן והרפתקאות עם אפקטים מרשימים."
            );
        } else if (genre === "animation") {
            setRecommendation(
                "המלצה: Frozen. סרט אנימציה משפחתי שמתאים גם לילדים."
            );
        } else {
            setRecommendation(
                "המלצה: Titanic. סרט דרמה קלאסי ומרגש."
            );
        }
    }

    return (
        <div>
            <h1>AI Recommendation</h1>

            <div>
                <label>בחר זאנר:</label>
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">בחר...</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                </select>
            </div>

            <div>
                <label>גיל:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div>
                <label>מצב רוח:</label>
                <input
                    type="text"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                />
            </div>

            <button onClick={getRecommendation}>קבל המלצה</button>

            {recommendation && (
                <div>
                    <h2>המלצת AI</h2>
                    <p>{recommendation}</p>
                    <p>גיל: {age}</p>
                    <p>מצב רוח: {mood}</p>
                </div>
            )}
        </div>
    );
}


