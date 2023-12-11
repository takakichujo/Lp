import { ExplainTopContentsDetail } from '../ExplainTopContents';
import { UnionButton } from '../UnionButton';
import { Contents } from '../Contents';
import { FC } from 'react';
import { ContentInfoTop } from '../../../lib/const/ContentsInfoTop';
export const Top: FC = () => {
  return (
    <div className='lg:w-986 lg:mt-50 mt-20 lg:mr-30 lg:ml-30 bg-bgBlue bg-cover bg-center pb-10 text-center lg:pt-10'>
      <ExplainTopContentsDetail className='lg:m-4' />
      <UnionButton
        className='text-center'
        message='14,900'
        content='原價 16,390日圓(含稅)，現省1,490日圓'
      />
      <Contents contentsInfoArray={ContentInfoTop} />
    </div>
  );
};
