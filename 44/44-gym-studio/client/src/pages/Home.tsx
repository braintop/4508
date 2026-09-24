import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__text">
          <span className="hero__badge">מערכת ניהול שיעורים</span>
          <h1>
            כל שיעורי הסטודיו של הרשת,
            <br />
            במקום אחד.
          </h1>
          <p>
            FitStudio היא מערכת לניהול שיעורי הסטודיו ברשת חדרי הכושר. בכל אחד מהסניפים מתקיימים
            עשרות שיעורים בשבוע — יוגה, פילאטיס, ספינינג ועוד — והמערכת מרכזת אותם בתצוגה אחת
            לפי סניף: מי מעביר את השיעור, מתי הוא מתחיל ומסתיים, כמה זמן הוא נמשך וכמה משתתפים
            אפשר לרשום. צוות הסניף יכול להוסיף שיעור חדש ללוח, לעדכן שיעור קיים כשמדריך מתחלף
            או שעה משתנה, ולמחוק שיעור שבוטל — הכול מול מסד נתונים אחד ומעודכן.
          </p>

          <div className="hero__actions">
            <Link to="/classes" className="btn btn--primary">
              לצפייה בשיעורים
            </Link>
            <Link to="/classes/new" className="btn btn--outline">
              הוספת שיעור חדש
            </Link>
          </div>
        </div>

        <div className="hero__image">
          <img src="/hero.svg" alt="איור של שיעור סטודיו בחדר כושר" width={800} height={520} />
        </div>
      </section>

      <section className="features">
        <article className="feature">
          <span className="feature__icon">🏢</span>
          <h3>תצוגה לפי סניף</h3>
          <p>בוחרים סניף מהרשימה ורואים רק את השיעורים שמתקיימים בו.</p>
        </article>
        <article className="feature">
          <span className="feature__icon">⏱️</span>
          <h3>משך השיעור</h3>
          <p>משך כל שיעור מחושב אוטומטית בדקות מתוך שעות ההתחלה והסיום.</p>
        </article>
        <article className="feature">
          <span className="feature__icon">🎨</span>
          <h3>עבר מול עתיד</h3>
          <p>שיעורים עתידיים מסומנים בכחול, שיעורים שכבר התקיימו באפור.</p>
        </article>
        <article className="feature">
          <span className="feature__icon">✏️</span>
          <h3>ניהול מלא</h3>
          <p>הוספה, עדכון ומחיקה של שיעורים ישירות מהממשק, עם ולידציה מלאה.</p>
        </article>
      </section>
    </div>
  );
}
