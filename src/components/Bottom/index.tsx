import { ExplainBottomContentsDetail } from '../ExplainBottomContents';
import { UnionButton } from '../UnionButton';
import { Contents } from '../Contents';
import { FC } from 'react';
import { ContentInfoBottom } from '../../lib/const/ContentsInfoBottom';
export const Bottom: FC = () => {
  return (
    <div className='w-986 mt-50 mr-30 ml-30 bg-bgBlue bg-cover bg-center pb-10 text-center pt-10'>
      <ExplainBottomContentsDetail className='m-4' />
      <UnionButton className='text-center' />
      <Contents contentsInfoArray={ContentInfoBottom} className='mt-40' />
    </div>
  );
};
