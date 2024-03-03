import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-row justify-between p-24">
      <Link href="/login">
        <Button variant="default">Entrar</Button>
      </Link>

      <h1>Landing page</h1>

      <Link href="/register">
        <Button variant="default">Cadastre-se</Button>
      </Link>
    </main>
  );
}
