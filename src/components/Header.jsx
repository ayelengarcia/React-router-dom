import { MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <Link className="link" to="/">
      <header>
        <h1>
          Movies & Series <MdMovieFilter />
        </h1>
      </header>
    </Link>
  );
};

export default Header;
