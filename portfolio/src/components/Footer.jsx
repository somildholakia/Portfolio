export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h2 className="font-bold text-xl gradient-text">
          Somil.dev
        </h2>

        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} Somil Dholakia. Built with React, Tailwind & Framer Motion.
        </p>

      </div>
    </footer>
  );
}