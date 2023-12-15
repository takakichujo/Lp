import { DescriptionTopProducts } from '../DescriptionTopProducts';
import { UnionButton } from '../UnionButton';
import { CampainProducts } from '../CampainProducts';
import { FC } from 'react';
import { ProductsTopInfo } from '../../../lib/const/ProductsTopInfo';
export const CampainTop: FC = () => {
  return (
    <div className='lg:w-986 lg:mt-50 mt-20 lg:mr-30 lg:ml-30 bg-bgBlue bg-cover bg-center pb-10 text-center lg:pt-10'>
      <DescriptionTopProducts className='lg:m-4' />
      <UnionButton
        message='14,900'
        content='原價 16,390日圓(含稅)，現省1,490日圓'
      />
      <CampainProducts contentsInfoArray={ProductsTopInfo} />
    </div>
  );
};
