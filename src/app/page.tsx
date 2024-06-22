import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/metcon/login");

  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}
