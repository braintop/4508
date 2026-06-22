// קובץ זה מגדיר "הפניות" לאוספים (collections) ב-Firestore

import {
  collection,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from './firebase'
import type { Todo, UserProfile } from './types/firebase'

// Converter = מתרגם בין אובייקט TypeScript לבין מסמך Firestore
// כשקוראים מסמך — מוסיפים את ה-id (Firestore יוצר אותו אוטומטית)
function createConverter<T extends DocumentData>() {
  return {
    toFirestore(data: T): DocumentData {
      return data
    },
    fromFirestore(snap: QueryDocumentSnapshot): T {
      return { id: snap.id, ...snap.data() } as unknown as T
    },
  }
}

// הפניה לאוסף todos — עם טיפוס Todo
export const todosCollection = collection(db, 'todos').withConverter(
  createConverter<Todo>()
)

// הפניה לאוסף users (לשימוש עתידי)
export const usersCollection = collection(db, 'users').withConverter(
  createConverter<UserProfile>()
)
