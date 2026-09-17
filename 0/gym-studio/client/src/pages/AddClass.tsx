import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBranches, addClass } from '../api';
import { Branch } from '../types';

export default function AddClass() {
  const navigate = useNavigate();

  const [branches, setBranches] = useState<Branch[]>([]);

  // שדות הטופס
  const [branchCode, setBranchCode] = useState('');
  const [className, setClassName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');

  const [error, setError] = useState('');

  // טוען את רשימת הסניפים ל-Select
  useEffect(() => {
    getBranches().then((data) => setBranches(data));
  }, []);

  // בודק את הטופס ומחזיר הודעת שגיאה, או מחרוזת ריקה אם הכל תקין
  function checkForm() {
    if (!branchCode || !className || !startTime || !endTime || !instructorName || !maxParticipants) {
      return 'כל השדות הם שדות חובה';
    }
    if (Number(maxParticipants) <= 0) {
      return 'מספר המשתתפים המקסימלי חייב להיות גדול מ-0';
    }
    if (startTime >= endTime) {
      return 'זמן ההתחלה חייב להיות לפני זמן הסיום';
    }
    if (new Date(startTime) < new Date()) {
      return 'לא ניתן להוסיף שיעור שזמן ההתחלה שלו בעבר';
    }
    return '';
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const errorMessage = checkForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    const result = await addClass({
      branch_code: branchCode,
      class_name: className,
      start_time: startTime,
      end_time: endTime,
      instructor_name: instructorName,
      max_participants: maxParticipants,
    });

    // אם השרת החזיר שגיאה - מציגים אותה
    if (result.error) {
      setError(result.error);
      return;
    }

    navigate('/classes');
  }

  return (
    <div className="page">
      <h1 className="page__title">הוספת שיעור חדש</h1>

      {error && <p className="error-box">{error}</p>}

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form__grid">
            <div className="field">
              <label htmlFor="branch_code">סניף *</label>
              <select
                id="branch_code"
                value={branchCode}
                onChange={(e) => setBranchCode(e.target.value)}
              >
                <option value="">— בחרו סניף —</option>
                {branches.map((branch) => (
                  <option key={branch.branch_code} value={branch.branch_code}>
                    {branch.branch_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="class_name">שם השיעור *</label>
              <input
                id="class_name"
                type="text"
                placeholder="לדוגמה: Yoga"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="start_time">תאריך ושעת התחלה *</label>
              <input
                id="start_time"
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="end_time">תאריך ושעת סיום *</label>
              <input
                id="end_time"
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="instructor_name">שם המדריך *</label>
              <input
                id="instructor_name"
                type="text"
                placeholder="לדוגמה: Dana Levi"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="max_participants">מספר משתתפים מקסימלי *</label>
              <input
                id="max_participants"
                type="number"
                placeholder="לדוגמה: 20"
                value={maxParticipants}
                onChange={(e) => setMaxParticipants(e.target.value)}
              />
            </div>
          </div>

          <p className="form__hint">* כל השדות הם שדות חובה</p>

          <div className="form__actions">
            <button type="submit" className="btn btn--primary">
              הוספת שיעור
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => navigate('/classes')}>
              ביטול
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
