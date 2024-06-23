import InputPrimary from "@/components/InputPrimary/InputPrimary";
import ButtonNav from "@/components/ButtonNav/ButtonNav";

import "./styles.css";

export default function LoginPage() {
  return (
    <main className="login-page">
      <h2 className="text-title">Atleta ¡Bienvenido!</h2>
      <div className="login-form">
        <form className="form-element">
          <InputPrimary
            type="password"
            placeholder="Ingresa el código del WOD"
          />
          <ButtonNav text="Start WOD" path="/metcon/wod" />
        </form>
      </div>
    </main>
  );
}
