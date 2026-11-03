
import { useCollection } from "../context/CollectionContext.jsx";

export default function Navbar({
  page,
  setPage,
  theme,
  toggleTheme
}) {
  const { albums } = useCollection();
  const count = Object.keys(albums).length;

  const tab = (id, label) => (
    <button
      className={`nav-tab ${page === id ? "active" : ""}`}
      onClick={() => setPage(id)}
    >
      {label}
    </button>
  );

  return (
    <header className="navbar">
      <h1 className="logo">Gem Music</h1>

      <nav>
        {tab("discover", "Discover")}
        {tab("collection", `My collection (${count})`)}
        {tab("ai-picks", "AI Picks")}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}
