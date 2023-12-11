import { FC } from 'react';
import { ExplainContentsBottomInfo } from '../../../lib/const/ExplainContentsBottomInfo';
import { DescriptionProduct } from '../DescriptionProduct';
import { Baloon } from '../../Commons/Baloon';
type Props = {
  className?: string;
};
export const DescriptionBottomProducts: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex lg:pt-50 pl-15 lg:flex-row lg:h-430 flex-col ${className}`}
    >
      <div className='relative h-auto flex flex-col'>
        <img
          src='../../src/img/CampainImg/fancl_bottom_content.webp'
          className='lg:w-450 lg:ml-4  w-90% mx-auto mb-4 lg:mb-0 h-auto object-contain lg:order-1 order-2'
        />
        <Baloon className='absolute lg:-top-full left-1/2 top-10 lg:order-2 order-1' />
      </div>
      <DescriptionProduct
        title='毛孔護理套組'
        span=''
        content='MCO速淨卸粧油 60ml'
        info={ExplainContentsBottomInfo}
        anotation=''
        className='h-300'
      />
    </div>
  );
};
