import { Link, Navigate, Route, Routes } from "react-router-dom";
import List from "./List";
import data from "../data.json";
import ItemDetail from "./ItemDetail";

const Main = () => {
  const { movies, series } = data;

  return (
    <main>
      <nav>
        <Link className="link" to="/movies">
          <h3>Movies</h3>
        </Link>

        <Link className="link" to="/series">
          <h3>Series</h3>
        </Link>
      </nav>
      <ul>
        <Routes>
          <Route
            path="/"
            element={
              <h4 className="burbuja">
                ¡BIENVENIDOS/AS A NUESTRA APP DE PELICULAS Y SERIES! 🎬
              </h4>}/>

          <Route path="/movies" element={<List list={movies} />} />
          <Route path="/movies/:name" element={<ItemDetail data={data} />} />

          <Route path="/series" element={<List list={series} />} />
          <Route path="/series/:name" element={<ItemDetail data={data} />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </ul>
    </main>
  );
};

export default Main;
