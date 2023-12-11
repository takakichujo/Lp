import { FC } from 'react';
type Props = {
  message: string;
  className?: string;
};
export const MoneyContent: FC<Props> = ({ message, className }) => {
  return (
    <div className={`flex ${className}`}>
      <span className='text-50 font-thin text-black mr-20 mt-20'>\</span>
      <div className='relative w-250 h-100 text-center border-b-10 border-white'>
        <h3 className='text-30 text-red-500'>特別套組價格</h3>
        <p className='text-50 text-red-500 leading-tight absolute top-8 '>
          {message}
          <span className='text-30'>日圓</span>
        </p>
      </div>
      <span className='text-50 font-thin text-black ml-20 mt-20'>/</span>
    </div>
  );
};
