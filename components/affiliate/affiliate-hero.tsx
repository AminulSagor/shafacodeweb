import React from 'react';

const AffiliateHero = () => {
  return (
    <section className="bg-linear-to-r from-slate-800  to-slate-700">
      <div className="max-w-6xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-slate-100 text-center space-y-8">
          {/* Small label */}
          <div className="inline-flex items-center rounded-full border border-sky-500/40 bg-slate-900/40 px-4 py-1 text-xs font-medium tracking-wide text-sky-300 backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            Become a affiliate and earn money.
          </div>

          {/* Heading + description */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Earn 4–6% by Referring&nbsp;
              <span className="text-sky-400">Software Projects</span>
            </h1>
            <p className="text-slate-200/80 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
              Share projects with{' '}
              <span className="font-semibold">ShafaCode</span> and earn
              affiliate commission on every{' '}
              <span className="font-semibold">successful deal.</span> We handle
              the work; you get a share of the project value.
            </p>

            <ul className="flex flex-wrap gap-y-2 gap-4 mt-6 text-sky-200 justify-center">
              <li className="w-full sm:w-auto text-sm">
                Commission:{' '}
                <strong className="text-sky-300 font-semibold">
                  4–6% per project
                </strong>
              </li>
              <li className="w-full sm:w-auto text-sm">
                Example:{' '}
                <strong className="text-sky-300 font-semibold">
                  ৳1,00,000
                </strong>{' '}
                project →{' '}
                <strong className="text-sky-300 font-semibold">
                  ৳4,000 – ৳6,000
                </strong>{' '}
                commission for you
              </li>
              <li className="w-full sm:w-auto text-sm">
                Transparent process, on-time payouts, long-term partnership
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateHero;
