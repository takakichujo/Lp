import { FC } from 'react';
import { SimpleRegions } from '../SimpleRegions';
export const TopTitle: FC = () => {
  return (
    <h1 className='bg-bgRegion w-80% mx-auto p-[10px] bg-pink-200'>
      <div className='flex'>
        <img
          className='w-1/2 object-contain '
          src='../../src/img/Region/RegionTop.webp'
        />
        <SimpleRegions />
      </div>
    </h1>
  );
};
