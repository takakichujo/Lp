import { DescriptionBottomProducts } from '../DescriptionBottomProducts';
import { UnionButton } from '../UnionButton';
import { CampainProducts } from '../CampainProducts';
import { FC } from 'react';
import { ContentInfoBottom } from '../../../lib/const/ContentsInfoBottom';
export const CampainBottom: FC = () => {
  return (
    <div className='lg:w-986 w-full lg:mt-50 mt-20 lg:mr-30 lg:ml-30 bg-bgBlue bg-cover bg-center pb-10 text-center lg:pt-10'>
      <DescriptionBottomProducts className='lg:m-4 ' />
      <UnionButton
        message='10,800'
        content='原價 11,088日圓(含稅)，現省1,008日圓'
      />
      <CampainProducts contentsInfoArray={ContentInfoBottom} />
    </div>
  );
};
