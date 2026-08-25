import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

type LoginForm = {
  email: string;
  password: string;
};

type LoginErrors = Partial<Record<keyof LoginForm, string>>;

type User = {
  name: string;
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>(() => ({
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
      nextErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Digite um e-mail válido.";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Informe sua senha.";
    } else if (form.password.length < 6) {
      nextErrors.password = "A senha deve ter no mínimo 6 caracteres.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof LoginForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const next = { ...prev };

      delete next[field];

      return next;
    });

    setStatus({
      type: "idle",
      message: "",
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Corrija os campos antes de continuar.",
      });

      return;
    }

    setIsSubmitting(true);

    setStatus({
      type: "idle",
      message: "",
    });

    try {
      const rawUsers = localStorage.getItem("users");

      const users: User[] = rawUsers ? JSON.parse(rawUsers) : [];

      const userFound = users.find(
        (user) =>
          user.email.toLowerCase() === form.email.trim().toLowerCase() &&
          user.password === form.password,
      );

      if (!userFound) {
        setStatus({
          type: "error",
          message: "E-mail ou senha incorretos.",
        });

        return;
      }

      /*
       * Lembrar e-mail
       */
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", form.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      /*
       * Salva o usuário que está logado
       */
      localStorage.setItem("loggedUser", JSON.stringify(userFound));

      setStatus({
        type: "success",
        message: "Login realizado com sucesso!",
      });

      /*
       * Pequeno delay para mostrar a mensagem
       */
      await new Promise((resolve) => setTimeout(resolve, 600));

      setForm({
        email: "",
        password: "",
      });

      /*
       * Vai para o Dashboard
       */
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Não foi possível realizar o login.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <p className="eyebrow">Bem-vindo de volta!</p>

          <h1>Entrar na sua conta</h1>
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
                placeholder="Digite sua senha"
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
              Esqueci minha senha
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
            Ainda não tem uma conta?{" "}
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
