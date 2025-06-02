export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6">
          <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">
            Impressum
          </a>
          <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
} 