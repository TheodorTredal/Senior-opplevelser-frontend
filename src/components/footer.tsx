import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Våre reiser',
      links: [
        { text: 'Reisekalender', href: '/Reisekalender' },
        { text: 'Kurs og seminar', href: '/kurs-og-seminar'},
        { text: 'Leserreiser', href: '/leserreiser' },
      ]
    },
    {
      title: 'Senior opplevelser',
      links: [
        { text: 'Kundeservice', href: '/kundeservice' },
        { text: 'Om Senior opplevelser', href: '/om-oss' },
        { text: 'Medlem av Reisegarantifondet', href: '#' }
      ]
    },
    {
      title: 'Informasjon',
      links: [
        { text: 'Reisebetingelser', href: '/reisebetingelser' },
        { text: 'Personvernerklæring', href: '/personvernerklæring' },
        { text: 'Informasjonskapsler', href: '/informasjonskapsler' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, text: 'Instagram', href: '#' },
    { icon: Facebook, text: 'Facebook', href: '#' },
    { icon: Mail, text: 'Einar klubben nyhetsbrev', href: '/einar-klubben' }
  ];

  return (
    <footer className="w-full bg-brand-navbar">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Standard sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social media section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Følg oss!
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <li key={index}>
                    <a
                      href={social.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      {social.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Senior opplevelser. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;