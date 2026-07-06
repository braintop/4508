// hooks/useToggle.ts
import { useState } from 'react'

export default function useToggle(initial: boolean = false) {
  const [value, setValue] = useState(initial)

  // הפיכת הערך — true <-> false
  function toggle() {
    setValue((prev) => !prev)
  }

  return { value, toggle }
}
