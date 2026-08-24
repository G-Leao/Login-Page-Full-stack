import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Inofrme se E-mail.");
      setSuccess("");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      setError("Digite um E-mail válido");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Link de Recuperação enviado ao seu E-mail");
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />

        {error && <small>{error}</small>}
        {success && <small>{success}</small>}

        <button type="submit" className="btn-form">
          Enviar Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
