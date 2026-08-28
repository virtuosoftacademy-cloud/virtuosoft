' use client'
import { FooterData, socialLinks } from '@/app/_constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dmca from '@/public/assets/Images/dmca.svg'
import Logo from '@/public/logo-light.png'

interface AddressItem {
  flagimg: string;
  country: string;
  address: string;
}

const Footer = (): React.JSX.Element => {

  const addresses: AddressItem[] = [
    {
      flagimg: "fi fi-pk",
      country: "Pakistan",
      address: `C, 35 Rashid Minhas Rd, 
Gulshan-e-Iqbal Block 10 A, 
Karachi, Pakistan`,
    },
    {
      flagimg: 'fi fi-sa',
      country: "Saudia Arabia",
      address: `Floor 18, Faisalya tower , Olaya Street, Riyadh, KSA`
    },
    {
      flagimg: 'fi fi-fr',
      country: "France",
      address: `1 allee des rochers, 94000 creteil, France`
    },
    {
      flagimg: 'fi fi-ae',
      country: "U.A.E",
      address: `Business Center 1, The Meydan Hotel, Ned Al shiba, Dubai. U.A.E`
    },
    {
      flagimg: 'fi fi-us',
      country: "U.S.A",
      address: "42747 Explorer Dr, Ashburn VA 2014, Virginia U.S.A"
    }
  ]
  return (
    <footer className="bg-foreground text-accent/50 py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ROW 1: All main services – mapped from data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {FooterData.map((section) => (
            <div key={section.title}>
              <h4 className="text-white uppercase text-xs md:text-lg tracking-wide font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm md:text-sm">
                {section.subPages?.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ROW 2: Secondary sections + Solutions */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16 border-t border-foreground pt-12">
          {secondarySections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-6">Solutions</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {solutions.map((solution) => (
                <span
                  key={solution}
                  className="bg-[#293547] px-3 py-1.5 rounded-full text-xs"
                >
                  {solution}
                </span>
              ))}
            </div>
          </div>
        </div> */}

        {/* ROW 3: Address | Subscribe | Follow Us */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 border-y border-[#222b36] py-10">
          <div className='flex flex-col'>
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-4">Address</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6'>
              {addresses.map((item, index) =>
                <div className='flex flex-col' key={index}>
                  {
                    item.country &&
                    <div><span className={`${item.flagimg}`} /></div>
                  }
                  <h2 className='text-accent'>{item.country}</h2>
                  <p className="text-sm leading-relaxed">
                    {item.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* <div>
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-4">
              Subscribe to Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Get news by email"
                className="flex-1 bg-transparent border border-[#8A94A4] rounded-lg px-4 py-3 text-white placeholder-[#8A94A4] focus:outline-none focus:border-[#0755E9] text-sm"
              />
              <Button
                // type="submit"
                className="px-6 py-3"
              >
                Subscribe
              </Button>
            </form>
          </div> */}

          <div className="flex flex-col shrink-0">
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-6 mt-1">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className='border border-accent/20 rounded p-2'
                >
                  <Image
                    src={link.src}
                    alt={link.name}
                    width={20}
                    height={20}
                    className="w-6 h-6 hover:opacity-70 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 4: Brand + Copyright */}
        <div className="flex flex-col justify-between sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-foreground">
          <div className='flex gap-8'>
            <Image
              height={200}
              width={200}
              src={Logo}
              alt="VirtuoSoft Logo"
              className="w-40 h-8"
            />
            <Image
              src={dmca}
              height={200}
              width={100}
              alt="VirtuoSoft Brand"
              className="h-8"
            />
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Virtuosoft | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;