
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Player from "./components/Player.jsx";
import Discover from "./pages/Discover.jsx";
import AlbumDetail from "./pages/AlbumDetail.jsx";
import Collection from "./pages/Collection.jsx";
import AiPicks from "./pages/AiPicks.jsx";

export default function App() {
  const [page, setPage] = useState("discover");
  const [albumId, setAlbumId] = useState(null);

  // Load the saved theme, or use dark mode by default
  const [theme, setTheme] = useState(
    () => localStorage.getItem("gem-music-theme") || "dark"
  );

  // Apply and save the selected theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("gem-music-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => current === "dark" ? "light" : "dark");
  };

  const openAlbum = (id) => {
    setAlbumId(id);
    setPage("album");
  };

  return (
    <>
      <Navbar
        page={page}
        setPage={setPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        {/* Discover stays mounted so your search results survive navigation */}
        <div hidden={page !== "discover"}>
          <Discover openAlbum={openAlbum} />
        </div>

        {page === "album" && (
          <AlbumDetail
            albumId={albumId}
            back={() => setPage("discover")}
          />
        )}

        {page === "collection" && (
          <Collection openAlbum={openAlbum} />
        )}

        {page === "ai-picks" && (
          <AiPicks openAlbum={openAlbum} />
        )}
      </main>

      <Player />
    </>
  );
}
