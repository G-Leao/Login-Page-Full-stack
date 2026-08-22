import {Link} from "react-router-dom";
import "./NotFound.css";
import NOTFOUND_IMAGE from "../../images/404_illustration.png";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-image">
        <img src={NOTFOUND_IMAGE} alt="Not Found" />
      </div>
      <div className="not-found-text">
        <h1>404 - Not Found</h1>
        <p>A Página que está procurando não existe.</p>
        <Link to="/login" className="next-link">
          Voltar para o Login
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
