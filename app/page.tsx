import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Test</h1>
      <Button>CV</Button>
    </main>
  );
}
