
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-full h-160 bg-gradient-to-r from-gray-800 to-gray-500 flex items-center justify-center">
        {/* Tu contenido de la página */}
        <h1 className="text-white text-6xl font-bold">
          En construcción...
        </h1>
      </main>
    </>
  );
} 