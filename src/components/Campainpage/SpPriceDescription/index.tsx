import { FC } from 'react';
type Props = {
  content: string;
};
export const SpPriceDescription: FC<Props> = ({ content }) => {
  return (
    <div className='w-90% mx-auto bg-blue-500 h-32 text-center lg:hidden mt-20 mb-20'>
      <p className='text-white'>{content}</p>
    </div>
  );
};
