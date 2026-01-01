import React from 'react';
import { format } from 'date-fns';

interface LastUpdatedProps {
  date: Date | string;
  prefix?: string;
  className?: string;
}

const LastUpdated: React.FC<LastUpdatedProps> = ({
  date,
  prefix = 'Last updated',
  className = 'text-sm text-gray-500 mt-4',
}) => {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  
  return (
    <div className={className}>
      <span className="font-medium">{prefix}:</span>{' '}
      <time dateTime={new Date(date).toISOString()}>
        {formattedDate}
      </time>
    </div>
  );
};

export default LastUpdated;
