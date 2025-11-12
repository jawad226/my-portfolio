'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState, memo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// ✅ Memoized Navigation Buttons
const NavButton = memo(({ name, href, onClick }: { name: string; href: string; onClick: (id: string) => void }) => (
  <button
    onClick={() => onClick(href)}
    className="w-full text-left hover:text-[#009689] transition-colors duration-300 relative group py-2"
  >
    {name}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009689] transition-all duration-300 group-hover:w-full"></span>
  </button>
));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Simplified and reliable scrollToSection function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const normalizedId = sectionId.toLowerCase();

      // Handle Blogs separately
      if (normalizedId === 'blogs') {
        router.push('/Blogs');
        setIsMenuOpen(false);
        return;
      }

      // Handle Home separately
      if (normalizedId === 'home') {
        if (pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          router.push('/');
        }
        setIsMenuOpen(false);
        return;
      }

      // Close mobile menu first
      setIsMenuOpen(false);

      // For other sections
      if (pathname !== '/') {
        // Navigate to home page first
        router.push('/');
        
        // Wait for navigation then scroll
        const scrollAfterNavigation = () => {
          const element = document.getElementById(normalizedId);
          if (element) {
            const headerOffset = 100; // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        };

        // Wait a bit longer for page to load
        setTimeout(scrollAfterNavigation, 600);
      } else {
        // If already on home page, scroll directly
        setTimeout(() => {
          const element = document.getElementById(normalizedId);
          if (element) {
            const headerOffset = 10;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    },
    [pathname, router]
  );

  const handleLogoClick = useCallback(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
    setIsMenuOpen(false);
  }, [pathname, router]);

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
    { name: 'Blogs', href: 'blogs' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-3">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://res.cloudinary.com/dcfzqdk58/image/upload/q_auto,f_auto,w_80,h_80/v1762697245/Gemini_Generated_Image_gy2wkhgy2wkhgy2w_gaqyka.png"
            alt="Profile"
            width={44}
            height={44}
            priority={true}
            className="rounded-full object-cover border-2 border-[#009689]"
          />
          <h1 className="text-lg sm:text-xl font-extrabold text-gray-800">Jawad Jameel</h1>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-gray-800">
          {navigation.map((item) => (
            <NavButton key={item.name} {...item} onClick={scrollToSection} />
          ))}
        </nav>

        {/* Resume Download Button */}
        <div className="hidden md:block">
          <Link
            href="/Jawad_Jameel.pd"
            download
            className="flex items-center gap-2 bg-[#009689] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#007a6e] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg group"
          >
            <span>Resume.pdf</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#009689] hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-100 shadow-lg px-6 space-y-3 pb-4">
          {navigation.map((item) => (
            <NavButton key={item.name} {...item} onClick={scrollToSection} />
          ))}
          <Link
            href="/Jawad_Jameel.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#009689] text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-[#007a6e] transition-all duration-300 mt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Download Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}