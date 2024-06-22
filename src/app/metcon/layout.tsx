import NavBar from "@/components/NavBar/NavBar";

export default function MetconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
    </div>
  );
}
