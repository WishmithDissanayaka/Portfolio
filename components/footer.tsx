export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="block md:inline-block">© Copyright Wishmith {currentYear}</span>
        </div>

        <div>
          <a
            href="#top"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors shadow-md"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

