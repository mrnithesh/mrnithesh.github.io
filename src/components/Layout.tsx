import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Nithesh K</h1>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nithesh K. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 