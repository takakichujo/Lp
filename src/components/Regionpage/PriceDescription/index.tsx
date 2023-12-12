import { FC } from 'react';
type Props = {
  title: string;
  content: string;
};
export const PriceDescription: FC<Props> = ({ title, content }) => {
  return (
    <div>
      <h2 className='text-left text-18 text-gray-500'>{title}</h2>
      <p className='text-left text-10 text-gray-400'>{content}</p>
    </div>
  );
};
