import "./styles.css";

export default function InputPrimary() {
  return (
    <form className="input-wrap">
      <input
        className="text-p"
        type="password"
        placeholder="Ingresa el código del WOD"
      ></input>
    </form>
  );
}
