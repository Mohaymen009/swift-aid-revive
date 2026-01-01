import React from 'react';
import { format } from 'date-fns';

interface ContentUpdateProps {
  date: Date | string;
  updates: string[];
  className?: string;
}

const ContentUpdate: React.FC<ContentUpdateProps> = ({
  date,
  updates,
  className = 'bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-blue-500',
}) => {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  
  return (
    <div className={className}>
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <svg
            className="h-5 w-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Content Updated: {formattedDate}
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <ul className="list-disc pl-5 space-y-1">
              {updates.map((update, index) => (
                <li key={index}>{update}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentUpdate;
