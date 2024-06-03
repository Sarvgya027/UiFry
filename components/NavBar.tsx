

// // export default NavBar
// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// function NavBar() {
//   const pathname = usePathname();

//   const linkClasses = (path: string) =>
//     `text-gray-800 font-medium text-xl ${
//       pathname === path ? 'text-rose-500' : 'hover:text-[#FF5555]'
//     }`;

//   return (
//     <div className='container mx-auto'>
//       <div className='container mx-auto py-[60px] flex justify-between items-center'>
//         <div className="flex items-center pl-[70px] gap-10">
//           <Image src='/images/logo1.png' alt='logo' width={120} height={100} />
//           <div className="flex items-center gap-10">
//             <Link className={linkClasses('/')} href='/'>
//               <span>Home</span>
//             </Link>
//             <Link className={linkClasses('/about')} href='/about'>
//               <span>About Us</span>
//             </Link>
//             <Link className={linkClasses('/pricing')} href='/pricing'>
//               <span>Pricing</span>
//             </Link>
//             <Link className={linkClasses('/features')} href='/features'>
//               <span>Features</span>
//             </Link>
//           </div>
//         </div>
//         <div className='pr-32'>
//           <button className='btn text-lg bg-black text-white hover:bg-[#FF5555] rounded-sm btn-active h-[60px] w-[180px]'>Download</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NavBar

// components/NavBar.js

// components/NavBar.tsx




'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgMenu, CgClose } from 'react-icons/cg';

interface Link {
  path: string;
  text: string;
}

interface NavBarContent {
  links: Link[];
  downloadButton: string;
}

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [content, setContent] = useState<NavBarContent | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch('/content/navbar.json');
        const data: NavBarContent = await res.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching navbar content:', error);
      }
    };

    fetchContent();
  }, []);

  if (!content) return null;

  const linkClasses = (path: string) =>
    `text-gray-800 font-medium text-xl ${pathname === path ? 'text-rose-500' : 'hover:text-[#FF5555]'} `;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='container w-[90%] mx-auto'>
        <div className='container mx-auto py-[60px] flex justify-between items-center'>
          {/* Logo */}
          <div className="flex items-center w-full pl-auto gap-10">
            <Image src='/images/logo1.png' alt='logo' width={120} height={100}  priority={true} />
            {/* Links (visible on medium screens and above) */}
            <div className="hidden md:flex items-center gap-10">
              {content.links.map((link, index) => (
                <Link key={index} className={linkClasses(link.path)} href={link.path}>
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
            
            <div className='relative ml-auto '>
              {/* Menu Button (visible on small screens) */}
              <button onClick={toggleMenu} className="md:hidden text-gray-800 p-4 px-[20px] hover:text-[#FF5555]
    rounded-sm border-2 border-black hover:border-[#FF5555] font-medium text-xl">
                {isMenuOpen ? <CgClose className="h-6 w-6" /> : <CgMenu className="h-6 w-6" />}
              </button>
              {/* Dropdown Menu (visible on small screens) */}
              <div className={`absolute right-2 mt-2 bg-b bg-white border-2 p-8 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-start gap-4">
                  {content.links.map((link, index) => (
                    <Link key={index} className={linkClasses(link.path)} href={link.path}>
                      <span className='border-b flex items-start'>{link.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
          {/* Download Button */}
          <div className="hidden lg:block pr-16">
            <button className="btn text-lg bg-black text-white hover:bg-[#FF5555] rounded-sm btn-active h-[60px] w-[180px]">
              {content.downloadButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
