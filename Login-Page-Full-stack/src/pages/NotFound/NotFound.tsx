
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/" className="back-home-link">
        Voltar para a página inicial
      </Link>
    </div>
  );
}


export default NotFound;
