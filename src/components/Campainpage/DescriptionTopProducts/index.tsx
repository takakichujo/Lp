import { FC } from 'react';
import { DescriptionProductsTopInfo } from '../../../lib/const/DescriptionProductsTopInfo';
import { DescriptionProduct } from '../DescriptionProduct';
import { Baloon } from '../../Commons/Baloon';
type Props = {
  className?: string;
};
export const DescriptionTopProducts: FC<Props> = ({ className }) => {
  return (
    <div className={`flex lg:pt-50 pl-15 lg:flex-row flex-col ${className}`}>
      <DescriptionProduct
        title='美白套組'
        notice='※1'
        content='MCO速淨卸粧油 120ml'
        info={DescriptionProductsTopInfo}
        anotation='※1 美白意指防止黑色素生成，預防色斑和雀斑。 
          （MCO速淨卸粧油、毛孔淨化潔膚泥膠、長效清透防曬露50+ (SPF50 PA++++) 除外）'
        className='order-2 lg:order-1'
      />
      <div className='relative lg:h-400 h-auto order-1 lg:order-2 flex flex-col'>
        <img
          src='../../src/img/CampainImg/fncl_top_content.webp'
          className='lg:w-450 lg:ml-4 lg:h-400 w-90% mb-4 lg:mb-0 mx-auto h-auto object-contain lg:order-1 order-2'
        />
        <Baloon className='absolute lg:-top-full left-1/2 top-10 lg:order-2 order-1' />
      </div>
    </div>
  );
};
