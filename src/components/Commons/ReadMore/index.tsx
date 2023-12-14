import { FC } from 'react';

export const ReadMore: FC = () => {
  return (
    <div className='rounded-lg w-[315px] border border-solid border-1 border-black mt-[40px] mx-auto'>
      <div className='flex'>
        <p className='mx-auto pt-[8px] pl-[20px] pb-[8px]'>檢視更多</p>
        <span className='text-[14px] pt-[10px] pb-[8px] pr-[20px]'>＞</span>
      </div>
    </div>
  );
};
