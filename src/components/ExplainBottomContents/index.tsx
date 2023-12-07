import { FC } from 'react';
import { ExplainContentsBottomInfo } from '../../lib/const/ExplainContentsBottomInfo';
import { ExplainContent } from '../ExplainContent';
import { Baloon } from '../Baloon';
export const ExplainBottomContentsDetail: FC = () => {
  return (
    <div className='flex mb-40 pt-50 pl-25'>
      <div className='relative'>
        <img src='../../src/img/fancl_bottom.jpeg' className='w-415 h-320 ' />
        <Baloon className='absolute -top-80 left-4' />
      </div>
      <ExplainContent
        title='毛孔護理套組'
        span=''
        content='MCO速淨卸粧油 60ml'
        info={ExplainContentsBottomInfo}
        anotation=''
      />
    </div>
  );
};
