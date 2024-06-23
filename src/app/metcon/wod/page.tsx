import ButtonNav from "@/components/ButtonNav/ButtonNav";

import "./styles.css";

export default function WodPage() {
  return (
    <div>
      <h1 className="text-title">Wod Page</h1>
      <ButtonNav path="/metcon/login" text="Regresar" />
    </div>
  );
}
