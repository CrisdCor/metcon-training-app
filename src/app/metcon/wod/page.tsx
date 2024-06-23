import Image from "next/image";

import ButtonNav from "@/components/ButtonNav/ButtonNav";

import "./styles.css";

export default function WodPage() {
  return (
    <main>
      <h1 className="text-subtitle text-center">WORK OUT OF THE DAY</h1>
      <ButtonNav path="/metcon/login" text="Regresar" />
      <div className="wod-wrap">
        <section className="wod-section section__mobility">
          <h2>MOBILITY</h2>
        </section>
        <section className="wod-section section__mobility">
          <h2>WARM UP</h2>
        </section>
        <section className="wod-section section__mobility">
          <h2>WEIGHTLIFTING</h2>
        </section>
        <section className="wod-section section__mobility">
          <h2>METCON</h2>
        </section>
      </div>
    </main>
  );
}
