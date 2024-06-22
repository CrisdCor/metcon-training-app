import { IoCaretDown } from "react-icons/io5";

import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import InputPrimary from "@/components/InputPrimary/InputPrimary";

import "./styles.css";

export default function WodPage() {
  return (
    <main className="login-page">
      <h2 className="text-title">Atleta ¡Bienvenido!</h2>
      <div className="login-form">
        <div className="button-wod">
          <ButtonPrimary
            text="WOD"
            icon={<IoCaretDown size={24} className="button__icon" />}
          />
        </div>
        <InputPrimary />
      </div>
    </main>
  );
}
