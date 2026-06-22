// src/types/firebase.ts

// Base interface for documents with Firestore ID
interface FirestoreDoc {
    id: string
  }
  
  // Todo document type
  export interface Todo extends FirestoreDoc {
    text: string
    completed: boolean
    createdAt: Date
    userId: string
  }
  
  // Omit 'id' for creating new documents (Firestore generates it)
  export type NewTodo = Omit<Todo, 'id'>
  
  // User profile document
  export interface UserProfile extends FirestoreDoc {
    email: string
    displayName: string
    photoURL: string | null
    createdAt: Date
  }
  
  export type NewUserProfile = Omit<UserProfile, 'id'>