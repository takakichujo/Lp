import { FC } from 'react';
import { ExplainContentsBottomInfo } from '../../lib/const/ExplainContentsBottomInfo';
import { ExplainContent } from '../ExplainContent';
import { Baloon } from '../Baloon';
type Props = {
  className?: string;
};
export const ExplainBottomContentsDetail: FC<Props> = ({ className }) => {
  return (
    <div className={`flex pt-50 pl-25 ${className}`}>
      <div className='relative h-400'>
        <img
          src='../../src/img/fancl_bottom.jpeg'
          className='w-415 h-400 bg-cover bg-center'
        />
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
