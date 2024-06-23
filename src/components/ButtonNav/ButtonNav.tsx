import Link from "next/link";

import "./styles.css";

interface Props {
  path: string;
  text: string;
  icon?: JSX.Element;
}

export default function ButtonNav({ path, icon, text }: Props) {
  return (
    <Link href={path} className="button-base">
      <p className="button-base__text">{text}</p>
      {icon}
    </Link>
  );
}
