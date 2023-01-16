import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

const Item = function ({ name, description, score }) {
  return (
    <li>
      <BiCameraMovie />
      <strong>{name}</strong>
      <small>- {description}</small>
      <div className="btn-score">
        <em>score: {score}</em>
        <Link to={`${name}`}>
          <button>Ver más</button>
        </Link> 
      </div>
    </li>
  );
};

export default Item;
