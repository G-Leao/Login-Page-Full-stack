import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);
  return (
    <div className="dashboard">
      <h1>DASHBOARD</h1>

      <h3>Bem Vindo!</h3>

      <p>Que bom te ver novamente!</p>

      <div className="Content-dashboard">
        <div className="Dashboard-card">
          <span className="card-icon">👤</span>
          <p>{user?.name}</p>

          <small>{user?.email}</small>
        </div>

        <div className="Dashboard-card">
          <span className="card-icon">🔐</span>
          <h4>Status da conta</h4>
          <p>Sessão ativa</p>
          <small>✓ Autenticado</small>
        </div>

        <div className="Dashboard-card">
          <span className="card-icon">🕐</span>
          <h4>Último acesso</h4>
          <p>Agora</p>
          <small></small>
        </div>
      </div>

      <div className="button-dashboard">
        <Link to="/login" className="quit-btn">
          Voltar para Login
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
