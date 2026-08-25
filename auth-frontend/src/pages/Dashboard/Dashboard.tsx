import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type LoggedUser = {
  name: string;
  email: string;
};

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<LoggedUser | null>(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
      try {
        setUser(JSON.parse(loggedUser));
      } catch {
        localStorage.removeItem("loggedUser");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login", { replace: true });
  };
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
        <button type="button" className="quit-btn" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
