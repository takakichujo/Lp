import { ExplainTopContentsDetail } from '../ExplainTopContents';
import { UnionButton } from '../UnionButton';
import { Contents } from '../Contents';
import { FC } from 'react';
import { ContentInfoTop } from '../../lib/const/ContentsInfoTop';
export const Top: FC = () => {
  return (
    <div className='w-986 mt-50 mr-30 ml-30 bg-bgBlue bg-cover bg-center pb-10 text-center pt-10'>
      <ExplainTopContentsDetail className='m-4' />
      <UnionButton className='text-center' />
      <Contents contentsInfoArray={ContentInfoTop} className='mt-40' />
    </div>
  );
};
