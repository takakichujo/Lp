import { FC } from 'react';
import { SimpleRegions } from '../SimpleRegions';
export const TopTitle: FC = () => {
  return (
    <div className='w-full mx-auto'>
      <h1 className='bg-bgRegion  mx-auto p-[10px] bg-pink-200'>
        <div className='flex lg:flex-row flex-col'>
          <img
            className='w-1/2  object-contain mr-[20px] h-[500px] lg:block hidden'
            src='../../src/img/Region/RegionTop.webp'
          />
          <img
            className='w-full  object-contain mr-[20px] h-auto lg:hidden block mb-[20px]'
            src='../../src/img/Region/RegionTop-sm.webp'
          />
          <SimpleRegions />
        </div>
      </h1>
      <p className='w-80% mx-auto text-left mt-[40px] mb-[40px]'>
        <span className='text-pink-500'>來自日本全國各地的伴手禮大集合！</span>
        在線上免稅店「完美行購物」，可事先於網路上購買日本全國各地
        <br />
        的伴手禮，再到日本各地的機場或車站取貨！
        <br /> 快來找找有興趣的當地伴手禮吧♩
      </p>
    </div>
  );
};
