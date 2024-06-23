import "./styles.css";

interface Props {
  placeholder?: string;
  type: string;
}

export default function InputPrimary({ placeholder, type }: Props) {
  return (
    <>
      <input
        className="input-btn text-p"
        type={type}
        placeholder={placeholder}
      ></input>
    </>
  );
}
