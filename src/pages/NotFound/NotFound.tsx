import {Link} from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-image">
        <img src="/path/to/404-image.png" alt="Not Found" />
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
