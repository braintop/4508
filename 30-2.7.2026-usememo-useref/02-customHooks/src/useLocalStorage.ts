// hooks/useLocalStorage.ts
import { useState } from 'react'

export default function useLocalStorage<T>(key: string, initial: T) {
  // קוראים מ-localStorage רק פעם אחת, באתחול
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key)
    return saved ? (JSON.parse(saved) as T) : initial
  })

  // עדכון — גם ל-state וגם ל-localStorage
  function update(newValue: T) {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, update] as const
}
