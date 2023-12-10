import { FC } from 'react';
import { ExplainContentsBottomInfo } from '../../lib/const/ExplainContentsBottomInfo';
import { ExplainContent } from '../ExplainContent';
import { Baloon } from '../Baloon';
type Props = {
  className?: string;
};
export const ExplainBottomContentsDetail: FC<Props> = ({ className }) => {
  return (
    <div className={`flex lg:pt-50 pl-15 lg:flex-row flex-col ${className}`}>
      <ExplainContent
        title='毛孔護理套組'
        span=''
        content='MCO速淨卸粧油 60ml'
        info={ExplainContentsBottomInfo}
        anotation=''
        className='order-2 lg:order-1'
      />
      <div className='relative lg:h-400 h-auto order-1 lg:order-2 flex flex-col'>
        <img
          src='../../src/img/fancl_bottom_content.webp'
          className='lg:w-450 ml-4 lg:h-400 max-w-full h-auto object-contain lg:order-1 order-2'
        />
        <Baloon className='absolute lg:-top-full left-1/2 top-10  lg:order-2 order-1' />
      </div>
    </div>
  );
};
