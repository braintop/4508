import { useRef } from 'react'

export default function SearchBox() {
  // הטיפוס: אלמנט input, מתחיל כ-null עד שהדף מצויר
  const inputRef = useRef<HTMLInputElement>(null)

  function focusSearch() {
    // חייבים לבדוק null — אולי עוד לא צויר
    const input = inputRef.current
    if (!input) return
    input.focus()
    input.style.backgroundColor = 'red'
    input.style.color = 'white'
    }

  return (
    <>
      {/* ref={} מחבר את הקופסה לאלמנט האמיתי */}
      <input ref={inputRef} placeholder="חיפוש סרט..." />
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>

      <button onClick={focusSearch}>חפש 🔍</button>
    </>
  )
}