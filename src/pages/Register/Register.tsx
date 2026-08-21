import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type RegisterErrors = Partial<Record<keyof RegisterForm, string>>;

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState<RegisterErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const validate = () => {
    const next: RegisterErrors = {};
    if (!form.name.trim()) next.name = "Informe seu nome.";

    if (!form.email.trim()) next.email = "Informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Digite um e-mail válido.";

    if (!form.password) next.password = "Informe uma senha.";
    else if (form.password.length < 6)
      next.password = "A senha deve ter pelo menos 6 caracteres.";

    if (!form.confirmPassword) next.confirmPassword = "Confirme sua senha.";
    else if (form.password !== form.confirmPassword)
      next.confirmPassword = "As senhas não coincidem.";

    if (!form.terms) next.terms = "Você deve aceitar os termos de uso.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof RegisterForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev } as RegisterErrors;
      delete next[field];
      return next;
    });
    setStatus({ type: "idle", message: "" });
  };

  const saveUser = (user: {
    name: string;
    email: string;
    password: string;
  }) => {
    // Simulação simples — no futuro troque por chamada a API
    try {
      const raw = localStorage.getItem("users");
      const users = raw ? JSON.parse(raw) : [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } catch {
      // ignore storage errors in demo
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: "error", message: "Corrija os erros do formulário." });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      // simula chamada assíncrona
      await new Promise((r) => setTimeout(r, 900));

      // ATENÇÃO: apenas simulação — não salve senhas em texto claro em produção
      saveUser({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });

      setStatus({
        type: "success",
        message: "Conta criada com sucesso! Redirecionando...",
      });

      setTimeout(() => navigate("/login"), 1200);
    } catch {
      setStatus({ type: "error", message: "Não foi possível criar a conta." });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <p className="eyebrow">Crie sua conta</p>
          <h1>Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit} className="register-form" noValidate>
          <div className="field-group">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Seu nome completo"
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && (
              <small className="error-message">{errors.name}</small>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="seuemail@empresa.com"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <small className="error-message">{errors.email}</small>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              name="password"
              autoComplete="new-password"
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Crie uma senha"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <small className="error-message">{errors.password}</small>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
              type="password"
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Repita a senha"
              className={errors.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && (
              <small className="error-message">{errors.confirmPassword}</small>
            )}
          </div>

          <label className="terms">
            <input
              type="checkbox"
              checked={form.terms}
              onChange={(e) => handleChange("terms", e.target.checked)}
            />
            <span>Eu concordo com os termos de uso</span>
          </label>
          {errors.terms && (
            <small className="error-message">{errors.terms}</small>
          )}

          {status.message && (
            <div className={`status-box ${status.type}`}>{status.message}</div>
          )}

          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Criando..." : "Criar conta"}
          </button>

          <p className="login-link">
            Já tem conta?{" "}
            <Link to="/login" className="link-text">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
