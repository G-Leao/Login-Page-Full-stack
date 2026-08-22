import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import type { LoginRequest } from "../../types/auth";
import "./Login.css";

type LoginErrors = Partial<Record<keyof LoginRequest, string>>;

function Login() {
  const [form, setForm] = useState<LoginRequest>(() => ({
    email:
      typeof window !== "undefined"
        ? (localStorage.getItem("rememberedEmail") ?? "")
        : "",
    password: "",
  }));

  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem("rememberedEmail"));
    } catch {
      return false;
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const validateForm = () => {
    const nextErrors: LoginErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Informe Seu E-mail";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Digite um E-mail válido.";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Informe sua Senha";
    } else if (form.password.length < 6) {
      nextErrors.password = "A senha deve ter No mínimo 6 Caracteres";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof LoginRequest, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev } as LoginErrors;
      delete next[field];
      return next;
    });
    setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Corrija Os campos antes de continuar",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", form.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      setStatus({
        type: "success",
        message: "Login Simulado Com Sucesso!",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Não Foi Possivel Realizar o Login",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <p className="eyebrow">Bem vindo de Volta!</p>
          <h1>Entrar Na Sua Conta</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <div className="field-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
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
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Digite Sua Senha"
                className={errors.password ? "input-error" : ""}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-pressed={showPassword}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            {errors.password && (
              <small className="error-message">{errors.password}</small>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Lembrar-me</span>
            </label>

            <Link to="/forgot-password" className="link-text">
              Esqueci Minha senha
            </Link>
          </div>

          {status.message && (
            <div className={`status-box ${status.type}`}>{status.message}</div>
          )}

          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>

          <p className="register-link">
            Ainda não tem uma conta?{""}
            <Link to="/register" className="link-text">
              CRIAR CONTA
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
