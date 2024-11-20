import React from 'react';
import Link from 'next/link'; // Importiere die Link-Komponente von Next.js

// Beispielproduktliste (diese könntest du später aus einer API oder einer Datenbank holen)
const products = [
  {
    id: 1,
    name: 'Grafikkarte NVIDIA RTX 3080',
    description: 'High-End-Grafikkarte für Gaming und Grafikdesign.',
    price: '€799,99',
    imageUrl: 'https://example.com/rtx3080.jpg', // Beispielbild
  },
  {
    id: 2,
    name: 'Intel Core i9 Prozessor',
    description: 'Leistungsstarker Prozessor für anspruchsvolle Anwendungen.',
    price: '€549,99',
    imageUrl: 'https://example.com/corei9.jpg',
  },
  {
    id: 3,
    name: 'Corsair Vengeance 16GB RAM',
    description: 'Schneller und zuverlässiger Arbeitsspeicher.',
    price: '€79,99',
    imageUrl: 'https://example.com/ram.jpg',
  },
  // Weitere Produkte hier hinzufügen
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-md hover:shadow-xl transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-400 mt-2">{product.description}</p>
        <p className="text-xl font-bold mt-4">{product.price}</p>
        {/* Link zur Produktdetailseite */}
        <Link href={`/schaufenster/${product.id}`} passHref>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
            Mehr erfahren
          </button>
        </Link>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold">PC Shop</h1>
        <nav className="space-x-6">
          <Link href="/" className="text-lg hover:text-gray-400">
            Home
          </Link>
          <Link href="/schaufenster" className="text-lg hover:text-gray-400">
            Schaufenster
          </Link>
          <Link href="#contact" className="text-lg hover:text-gray-400">
            Kontakt
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Unsere PC-Teile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 bg-gray-800 text-center text-white">
        <p>© 2024 PC Shop. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default Page;
