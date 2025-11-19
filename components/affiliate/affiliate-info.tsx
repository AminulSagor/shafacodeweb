import AffiliateLeadForm from './affiliate-lead-form';
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
              <AffiliateLeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateInfo;
