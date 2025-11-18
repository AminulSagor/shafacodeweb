import BriefSummary from './brief-summary';
import VideoPlayer from './video-player';

const AffiliateInfo = () => {
  return (
    <div className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="py-10 md:py-20 px-8">
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="flex-2 flex flex-col gap-8">
              <VideoPlayer />
              <BriefSummary />
            </div>
            <div className="flex-1">
              <div className="border p-4 rounded-lg border-slate-700">
                <h2 className="text-xl font-semibold mb-2">
                  Join as an affiliate
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                  Share your details and we’ll get back to you with how to track
                  your referrals and receive your 4–6% commission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateInfo;
