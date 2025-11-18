import { cn } from '@/lib/utils';
import { ProjectType } from '@/types';
import { Check, Hourglass } from 'lucide-react';
import React from 'react';

const PortfolioCard = ({
  title,
  client,
  contact,
  description,
  status,
}: ProjectType) => {
  return (
    <div
      className={cn(
        'p-4 rounded-md border border-slate-200 hover:-translate-y-1  transition-all duration-200 ease-in-out',
        status === 'Delivered' ? 'bg-sky-50 border-sky-400' : 'bg-slate-50'
      )}
    >
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-800 mb-2">{description}</p>
      <p>
        <strong className="text-slate-900 text-sm">Client:&nbsp;</strong>
        <span className="text-slate-800 text-sm"> {client}</span>
      </p>
      <p className="flex items-center">
        <strong className="text-slate-900 text-sm">Status:&nbsp;</strong>
        <span className="text-slate-800 text-sm flex items-center">
          {' '}
          {status === 'Delivered' ? (
            <Check className="mr-1" size={16} />
          ) : (
            <Hourglass className="mr-1" size={14} />
          )}{' '}
          {status}
        </span>
      </p>
      <p>
        <strong className="text-sm text-slate-900">Contact: &nbsp;</strong>
        <span>
          <a
            href="shaikh.dine@chorki.com"
            className="text-sky-600 text-sm hover:underline"
          >
            {contact}
          </a>
        </span>
      </p>
    </div>
  );
};

export default PortfolioCard;
