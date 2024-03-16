import { authLanding } from "../components/auth-landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Dexterix 4.0</h1>
      {authLanding()}
    </main>
  );
}
