import Center from "@/components/Center/Center";
import Nav from "@/components/Nav/Nav";

export default function HomePage() {
  const navElements = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "About", link: "#" },
    { id: 3, name: "Contact", link: "#" },
    { id: 4, name: "Ganz langer Text", link: "#" },
  ];
  return (
    <Center>
      <Nav navelements={navElements} />
      <main>Main</main>
    </Center>
  );
}
