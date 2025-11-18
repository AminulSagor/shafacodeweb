import React from 'react';
import FooterContactForm from '../footer/footer-contact-form';
import { Button } from '../ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center py-10 gap-2">
            <div>
              <p className="text-slate-200 text-sm md:text-base">
                © 2025 ShafaCode. All Rights Reserved.
              </p>
            </div>
            <div className="flex  text-slate-200">
              <Link
                href="/privacy-policy"
                className="hover:underline hover:text-sky-600 text-sm md:text-base"
              >
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link
                href="/terms-and-conditions"
                className="hover:underline hover:text-sky-600 text-sm md:text-base"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
