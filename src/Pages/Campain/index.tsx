import { FC } from 'react';
import { CampainTopImage } from '../../components/Campainpage/CampainTopImage';
import { CampainTop } from '../../components/Campainpage/CampainTop';
import { CampainBottom } from '../../components/Campainpage/CampainBottom';
export const Campain: FC = () => {
  return (
    <div className='lg:mx-auto lg:w-1140 w-full'>
      <CampainTopImage />
      <CampainTop />
      <CampainBottom />
    </div>
  );
};
