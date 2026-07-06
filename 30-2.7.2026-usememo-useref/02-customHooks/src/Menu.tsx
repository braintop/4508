import useToggle from "./useToggle"
export default function Menu() {
    const { value, toggle } = useToggle()
  
    return (
      <>
        <button onClick={toggle}>{value ? 'סגור תפריט' : 'פתח תפריט'}</button>
        {value && <nav>...התפריט...</nav>}
      </>
    )
  }
  