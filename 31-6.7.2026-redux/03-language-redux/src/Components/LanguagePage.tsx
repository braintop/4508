import { useDispatch, useSelector } from "react-redux";
import { setEnglish, setHebrew, setArabic } from "../slices/languageSlice";
import type { RootState } from "../store/store";
export const LanguagePage = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.language.current);
    const handleSetEnglish = () => {
        dispatch(setEnglish());
    };
    const handleSetHebrew = () => {
        dispatch(setHebrew());
    };
    const handleSetArabic = () => {
        dispatch(setArabic());
    };
    return (
        <div>
            <h1>Choose Your Language</h1>
            <p>Current Language: {currentLanguage}</p>
            <button onClick={handleSetEnglish}>Set English</button>
            <button onClick={handleSetHebrew}>Set Hebrew</button>
            <button onClick={handleSetArabic}>Set Arabic</button>
        </div>
    )
}