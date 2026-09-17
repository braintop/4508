import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBranches, getClassesByBranch, deleteClass } from '../api';
import { Branch, StudioClass } from '../types';

// הופך "2026-09-16 08:00:00" לתצוגה יפה בעברית
function formatDate(value: string) {
  const date = new Date(value.replace(' ', 'T'));
  return date.toLocaleString('he-IL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// בודק אם השיעור כבר התחיל (בעבר)
function isPast(value: string) {
  return new Date(value.replace(' ', 'T')) < new Date();
}

export default function Classes() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [classes, setClasses] = useState<StudioClass[]>([]);
  const [message, setMessage] = useState('');

  // טוען את רשימת הסניפים כשהדף נפתח
  useEffect(() => {
    getBranches().then((data) => setBranches(data));
  }, []);

  // כשבוחרים סניף - טוען את השיעורים שלו
  async function handleSelectBranch(branchCode: string) {
    setSelectedBranch(branchCode);
    setMessage('');

    if (branchCode === '') {
      setClasses([]);
    } else {
      //getClassesByBranch(branchCode).then((data) => setClasses(data));
      let response = await fetch(`http://localhost:3000/api/branches/${branchCode}/classes`);
      let data = await response.json();
      setClasses(data);
    }
  }

  // מוחק שיעור
  async function handleDelete(studioClass: StudioClass) {
    const confirmed = window.confirm(`למחוק את השיעור "${studioClass.class_name}"?`);
    if (!confirmed) {
      return;
    }

    const result = await deleteClass(studioClass.class_code);

    // אם השרת החזיר שגיאה - מציגים אותה ולא מוחקים מהמסך
    if (result.error) {
      setMessage(result.error);
      return;
    }

    setClasses(classes.filter((c) => c.class_code !== studioClass.class_code));
    setMessage(`השיעור "${studioClass.class_name}" נמחק בהצלחה`);
  }

  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">שיעורי סטודיו</h1>
        <Link to="/classes/new" className="btn btn--primary">
          + שיעור חדש
        </Link>
      </div>

      {/* בחירת סניף */}
      <div className="card filter-bar">
        <label htmlFor="branch-select">בחרו סניף:</label>
        <select
          id="branch-select"
          value={selectedBranch}
          onChange={(e) => handleSelectBranch(e.target.value)}
        >
          <option value="">— בחרו סניף —</option>
          {branches.map((branch) => (
            <option key={branch.branch_code} value={branch.branch_code}>
              {branch.branch_name}
            </option>
          ))}
        </select>

        <div className="legend">
          <span className="legend__item">
            <i className="legend__dot legend__dot--future" /> שיעור עתידי
          </span>
          <span className="legend__item">
            <i className="legend__dot legend__dot--past" /> שיעור שהתקיים
          </span>
        </div>
      </div>

      {message && <p className="success-box">{message}</p>}

      {selectedBranch === '' && <p className="empty-state">בחרו סניף כדי לראות את השיעורים שלו.</p>}

      {selectedBranch !== '' && classes.length === 0 && (
        <p className="empty-state">אין שיעורים בסניף הזה.</p>
      )}

      {/* רשימת השיעורים */}
      <div className="classes-grid">
        {classes.map((studioClass) => (
          <article
            key={studioClass.class_code}
            className={
              isPast(studioClass.start_time)
                ? 'class-card class-card--past'
                : 'class-card class-card--future'
            }
          >
            <div className="class-card__header">
              <h3>{studioClass.class_name}</h3>
              <span className="class-card__status">
                {isPast(studioClass.start_time) ? 'התקיים' : 'עתידי'}
              </span>
            </div>

            <div className="class-card__details">
              <div>
                <span>מדריך</span>
                <span>{studioClass.instructor_name}</span>
              </div>
              <div>
                <span>התחלה</span>
                <span>{formatDate(studioClass.start_time)}</span>
              </div>
              <div>
                <span>סיום</span>
                <span>{formatDate(studioClass.end_time)}</span>
              </div>
              <div>
                <span>משך השיעור</span>
                <span>{studioClass.duration_minutes} דקות</span>
              </div>
              <div>
                <span>משתתפים מקס׳</span>
                <span>{studioClass.max_participants}</span>
              </div>
            </div>

            <div className="class-card__actions">
              <Link to={`/classes/${studioClass.class_code}/edit`} className="btn btn--small btn--outline">
                עדכון
              </Link>
              <button
                className="btn btn--small btn--danger"
                onClick={() => handleDelete(studioClass)}
              >
                מחיקה
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
