import { IoCaretDown } from "react-icons/io5";

import "./styles.css";

interface Props {
  icon?: JSX.Element;
  text: string;
}

export default function ButtonPrimary({ icon, text }: Props) {
  return (
    <>
      <button className="button-primary">
        <p>{text}</p>
        {icon}
      </button>
    </>
  );
}
