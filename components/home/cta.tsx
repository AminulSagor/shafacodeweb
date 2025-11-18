import React from 'react';
import FooterContactForm from '../footer/footer-contact-form';
import { Button } from '../ui/button';

const CtaSection = () => {
  return (
    <>
      <div className="py-10 md:py-20 bg-linear-to-r from-slate-950 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-slate-200 text-center mb-8">
            Contact
          </h1>

          <div className="flex flex-col md:flex-row gap-8 px-8">
            <div className="text-slate-200 space-y-2 flex-1">
              <p>
                <strong>Email:&nbsp;</strong>
                <span className="text-sky-400 text-sm">
                  <a
                    href="aminulislamsagor@shafacode.com"
                    className="hover:underline"
                  >
                    aminulislamsagor@shafacode.com
                  </a>
                </span>
              </p>
              <p>
                <strong>Whatsapp:&nbsp;</strong>
                <span className="text-sky-400 text-sm">
                  <a
                    href="https://wa.me/8801540233587"
                    className="hover:underline"
                  >
                    Chat on Whatsapp
                  </a>
                </span>
              </p>
              <p>
                <strong>Linkedin:&nbsp;</strong>
                <span className="text-sky-400 text-sm">
                  <a
                    href="https://www.linkedin.com/company/108744292"
                    className="hover:underline"
                  >
                    Connect on Linkedin
                  </a>
                </span>
              </p>
              <p>
                <strong>Facebook:&nbsp;</strong>
                <span className="text-sky-400 text-sm">
                  <a
                    href="https://www.facebook.com/profile.php?id=61580938442647"
                    className="hover:underline"
                  >
                    Follow us on Facebook
                  </a>
                </span>
              </p>
              <p className="mt-4">
                📍 We don’t have a physical office right now, but our team
                members are located across major cities. We can arrange project
                meetings almost anywhere that’s convenient for you.
              </p>
            </div>
            <FooterContactForm />
          </div>
        </div>
      </div>

      <div className="py-10 md:py-20 bg-linear-to-r from-slate-800 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col gap-4 items-center justify-between px-8">
            <p className="text-slate-200 text-center md:text-left text-3xl font-semibold">
              Have an idea? Let’s build it—beautifully and reliably.
            </p>
            <Button
              size={'lg'}
              className="bg-slate-100 text-slate-900 font-semibold text-xl px-4 py-6 rounded-md hover:bg-slate-200 transition-all duration-200 ease-in-out cursor-pointer"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaSection;
