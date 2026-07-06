import useToggle from "./useToggle"
export default function Colors() {
    const { value:color, toggle } = useToggle()
    return (
        <div>
            <button onClick={toggle}>{color ? 'Red' : 'Blue'}</button>
        </div>
    )
}