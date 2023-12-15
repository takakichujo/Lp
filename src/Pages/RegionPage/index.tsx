import { TopTitle } from '../../components/Regionpage/TopTitle';
import { Regions } from '../../components/Regionpage/Regions';
import { FC } from 'react';
export const Regionpage: FC = () => {
  return (
    <div className='lg:w-80% mx-auto w-full'>
      <TopTitle />
      <Regions />
    </div>
  );
};
