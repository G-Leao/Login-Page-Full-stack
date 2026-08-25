import { useState } from "react";
import type { FormEvent } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!email.trim()) {
      setStatus({ type: "error", message: "Informe seu E-mail." });
      return;
    }

    if (!emailValido) {
      setStatus({ type: "error", message: "Digite um E-mail válido" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus({
      type: "success",
      message: "Link de Recuperação enviado ao seu E-mail",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <div className="form-header">
          <p className="eyebrow">Recuperação</p>
          <h1>Esqueceu Sua Senha?</h1>
        </div>

        <form onSubmit={handleSubmit} className="forgot-form" noValidate>
          <div className="field-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              className={`input-form ${status.type === "error" ? "input-error" : ""}`}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status.message) {
                  setStatus({ type: "idle", message: "" });
                }
              }}
              placeholder="Digite seu e-mail"
            />
          </div>

          {status.message && (
            <div className={`status-box ${status.type}`}>{status.message}</div>
          )}

          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
