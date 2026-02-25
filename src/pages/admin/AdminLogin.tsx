import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - no backend
    if (email && password) {
      localStorage.setItem("admin_logged", "true");
      navigate("/admin");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-elevated"
      >
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock size={20} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Admin Panel</h1>
          <p className="mt-1 font-body text-sm text-muted-foreground">Ingresa tus credenciales</p>
        </div>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 font-body text-sm text-foreground outline-none focus:border-primary"
                placeholder="admin@velvet.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Contraseña</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 font-body text-sm text-foreground outline-none focus:border-primary"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg gradient-rose py-2.5 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Iniciar Sesión
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
