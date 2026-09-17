import { Branch, StudioClass } from './types';

// הכתובת של השרת
const API_URL = 'http://localhost:3000/api';

// הודעה שמוחזרת כשאי אפשר להתחבר לשרת בכלל
const NO_SERVER = { error: 'אין חיבור לשרת. ודאו שהשרת רץ.' };

// מחזיר את כל הסניפים
export async function getBranches(): Promise<Branch[]> {
  try {
    const response = await fetch(`${API_URL}/branches`);
    const data = await response.json();
    // אם השרת החזיר שגיאה - מחזירים רשימה ריקה כדי שהדף לא ייפול
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log('אין חיבור לשרת. ודאו שהשרת רץ.');
    return [];
  }
}

// מחזיר את כל השיעורים של סניף מסוים
export async function getClassesByBranch(branchCode: string): Promise<StudioClass[]> {
  try {
    const response = await fetch(`${API_URL}/branches/${branchCode}/classes`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log('אין חיבור לשרת. ודאו שהשרת רץ.');
    return [];
  }
}

// מחזיר שיעור אחד לפי קוד
export async function getClass(classCode: string) {
  try {
    const response = await fetch(`${API_URL}/classes/${classCode}`);
    return response.json();
  } catch (error) {
    return NO_SERVER;
  }
}

// מוסיף שיעור חדש
export async function addClass(newClass: any) {
  try {
    const response = await fetch(`${API_URL}/classes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClass),
    });
    return response.json();
  } catch (error) {
    return NO_SERVER;
  }
}

// מעדכן שיעור קיים
export async function updateClass(classCode: string, updatedClass: any) {
  try {
    const response = await fetch(`${API_URL}/classes/${classCode}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedClass),
    });
    return response.json();
  } catch (error) {
    return NO_SERVER;
  }
}

// מוחק שיעור
export async function deleteClass(classCode: number) {
  try {
    const response = await fetch(`${API_URL}/classes/${classCode}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    return NO_SERVER;
  }
}
