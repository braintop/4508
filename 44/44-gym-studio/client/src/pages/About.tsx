export default function About() {
  return (
    <div className="page">
      <h1 className="page__title">אודות</h1>

      <section className="card about">
        <h2>על המערכת</h2>
        <p>
          FitStudio היא אפליקציית Full-Stack לניהול שיעורי סטודיו ברשת חדרי כושר. המערכת מאפשרת
          לצפות בכל סניפי הרשת, לבחור סניף ולראות את כל שיעורי הסטודיו המתקיימים בו, להוסיף
          שיעור חדש, לעדכן שיעור קיים ולמחוק שיעור שבוטל.
        </p>
        <p>
          עבור כל שיעור מוצגים שם השיעור, שם המדריך, מועדי ההתחלה והסיום, משך השיעור בדקות ומספר
          המשתתפים המקסימלי. שיעור שמועד ההתחלה שלו עדיין לא הגיע מוצג בכחול, ושיעור שכבר
          התקיים מוצג באפור.
        </p>

        <h2>ארכיטקטורה</h2>
        <div className="about__stack">
          <div className="about__layer">
            <h3>Frontend</h3>
            <ul>
              <li>React 18 + TypeScript</li>
              <li>Vite כ-build tool</li>
              <li>React Router לניווט בין הדפים</li>
              <li>fetch לקריאות לשרת</li>
            </ul>
          </div>
          <div className="about__layer">
            <h3>Backend</h3>
            <ul>
              <li>Node.js + Express + TypeScript</li>
              <li>Routes — הכתובות של השרת</li>
              <li>Controllers — הפונקציות ושאילתות ה-SQL</li>
              <li>כתובת מסד הנתונים בקובץ <code>.env</code></li>
            </ul>
          </div>
          <div className="about__layer">
            <h3>Database</h3>
            <ul>
              <li>PostgreSQL בענן (Neon)</li>
              <li>טבלת <code>branches</code> — סניפים</li>
              <li>טבלת <code>studio_classes</code> — שיעורים</li>
              <li>מפתח זר, אינדקסים ו-CHECK constraints</li>
            </ul>
          </div>
        </div>

        <h2>נקודות קצה (API)</h2>
        <table className="routes-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Route</th>
              <th>תיאור</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>GET</td><td>/api/branches</td><td>כל סניפי חדר הכושר</td></tr>
            <tr><td>GET</td><td>/api/branches/:branchCode/classes</td><td>שיעורי סניף ספציפי</td></tr>
            <tr><td>GET</td><td>/api/classes/:classCode</td><td>פרטי שיעור אחד</td></tr>
            <tr><td>POST</td><td>/api/classes</td><td>הוספת שיעור חדש</td></tr>
            <tr><td>PUT</td><td>/api/classes/:classCode</td><td>עדכון שיעור קיים</td></tr>
            <tr><td>DELETE</td><td>/api/classes/:classCode</td><td>מחיקת שיעור</td></tr>
          </tbody>
        </table>

        <h2>על המתכנת/ת</h2>
        <p className="about__developer">
          הפרויקט נכתב כמשימה שלישית בקורס פיתוח Full-Stack, בנושאים TypeScript, Node.js, React
          ומסדי נתונים. מטרת המשימה הייתה לבנות מערכת שלמה מקצה לקצה — מתכנון סכמת מסד הנתונים,
          דרך בניית שירות RESTful ובדיקתו ב-Postman, ועד ממשק משתמש מלא בצד הלקוח.
        </p>
        <p className="about__signature">
          נכתב על ידי: <strong>[שם התלמיד/ה]</strong> · קורס Full-Stack · {new Date().getFullYear()}
        </p>
      </section>
    </div>
  );
}
