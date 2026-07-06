
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const Navbar = () => {
  const language = useSelector(
    (state: RootState) => state.language.current
  );

  const getFlag = () => {
    switch (language) {
      case "עברית":
        return "🇮🇱";

      case "English":
        return "🇺🇸";

      case "العربية":
        return "🇸🇦";

      default:
        return "🌍";
    }
  };

  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#f2f2f2",
        marginBottom: "20px",
      }}
    >
      <h2>🌐 Language App</h2>

      <h3>
        {getFlag()} {language}
      </h3>
    </div>
  );
}