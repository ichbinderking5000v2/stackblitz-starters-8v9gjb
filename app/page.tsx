// app/page.tsx
import React from "react";
import Image from "next/image"; // Um das Bild zu laden, falls du Next.js verwendest

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header Bereich */}
      <header className="flex justify-between p-5 border-b border-gray-700">
        <h1 className="text-3xl font-bold">PC Teileshop</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#gpu" className="hover:text-gray-400">GPU</a></li>
            <li><a href="#cpu" className="hover:text-gray-400">CPU</a></li>
            <li><a href="#ram" className="hover:text-gray-400">RAM</a></li>
            <li><a href="#storage" className="hover:text-gray-400">Storage</a></li>
            <li><a href="#case" className="hover:text-gray-400">Case</a></li>
          </ul>
        </nav>
      </header>

      {/* Produkte Bereich */}
      <main className="p-10">
        <h2 className="text-2xl font-semibold mb-5">Unsere Produkte</h2>

        {/* GPUs */}
        <section id="gpu" className="mb-12">
          <h3 className="text-xl font-bold mb-4">Grafikkarten (GPU)</h3>
          <div className="flex space-x-6 overflow-x-auto">
            {/* RTX 3080 Produkt */}
            <div className="w-72 bg-gray-800 p-5 rounded-lg shadow-lg">
              <Image
                src="/rtx3080.png" // Stelle sicher, dass das Bild im 'public'-Ordner von Next.js liegt
                alt="RTX 3080"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold mt-4">NVIDIA RTX 3080</h4>
              <p className="text-sm text-gray-400">Erleben Sie unglaubliche Leistung für Gaming und kreative Anwendungen!</p>
              <p className="text-xl font-bold mt-2">€699,99</p>
              <button className="bg-blue-600 w-full mt-3 py-2 rounded-md text-white hover:bg-blue-700">Jetzt einkaufen</button>
            </div>

            {/* Weitere GPUs */}
            <div className="w-72 bg-gray-800 p-5 rounded-lg shadow-lg">
              <Image
                src="/rtx3070.png" // Beispiel für eine andere GPU
                alt="RTX 3070"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold mt-4">NVIDIA RTX 3070</h4>
              <p className="text-sm text-gray-400">Für Gamer, die höchste Leistung suchen.</p>
              <p className="text-xl font-bold mt-2">€499,99</p>
              <button className="bg-blue-600 w-full mt-3 py-2 rounded-md text-white hover:bg-blue-700">Jetzt einkaufen</button>
            </div>
          </div>
        </section>

        {/* CPUs */}
        <section id="cpu" className="mb-12">
          <h3 className="text-xl font-bold mb-4">Prozessoren (CPU)</h3>
          <div className="flex space-x-6 overflow-x-auto">
            <div className="w-72 bg-gray-800 p-5 rounded-lg shadow-lg">
              <Image
                src="/i9-12900k.png" // Beispiel für eine CPU
                alt="Intel i9-12900K"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold mt-4">Intel Core i9-12900K</h4>
              <p className="text-sm text-gray-400">Die ultimative Leistung für Gaming und kreative Anwendungen.</p>
              <p className="text-xl font-bold mt-2">€849,99</p>
              <button className="bg-blue-600 w-full mt-3 py-2 rounded-md text-white hover:bg-blue-700">Jetzt einkaufen</button>
            </div>
          </div>
        </section>

        {/* RAM, Storage, etc. */}
        <section id="ram" className="mb-12">
          <h3 className="text-xl font-bold mb-4">RAM</h3>
          {/* Hier kannst du weitere Produkte hinzufügen */}
        </section>
      </main>

      {/* Footer Bereich */}
      <footer className="bg-gray-800 text-center p-5 mt-10">
        <p>&copy; 2024 PC Teileshop. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
