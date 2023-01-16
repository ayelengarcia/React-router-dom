import { useLocation, useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  // const name =  useLocation().pathname.split("/").[3] Otra forma de acceder

  const { name } = useParams(); //permite obtener los valores dinamicos "Los params :name"
  const category = useLocation().pathname.split("/")[1]; //permite acceder a toda la locacion "/movies/avatar"

  const items = data[category]; //Arreglo = data.movies o data.series
  const item = items.find((item) => item.name === name); // Si el name del param coincide con el name del objeto, devolveme ese objeto.

  return (
    <div className="burbuja">
      <h4>{item.name.toUpperCase()}</h4>
      <p>{item.description}</p>
      <p>{item.score}</p>
    </div>
  );
};

export default ItemDetail;
