import { FC } from 'react';
import { ContentInfo } from '../../types';
export const Content: FC<ContentInfo> = ({
  circleTopName,
  circleSpanName,
  circleBottomName,
  img,
  contentTitle,
  contentSentence,
}) => {
  return (
    <div className='w-250 m-20'>
      <div className='w-220 h-400 mt-40 mb-20 ml-20 flex flex-col items-center bg-offwhite p-3 relative flex-shrink-0'>
        <div className='w-60 h-60 bg-blue-500 rounded-full absolute -top-10 -left-10'>
          <p className='text-white text-xs pt-2 text-center'>
            {circleTopName}
            <span className='text-sm'>{circleSpanName}</span>
          </p>
          <p className='text-white text-xs text-center'>{circleBottomName}</p>
        </div>
        <img src={img} className='w-90 h-230' />
        <p className='font-bold mt-20 text-center text-sm'>{contentTitle}</p>
        <p className='text-sm text-center'>{contentSentence}</p>
      </div>
    </div>
  );
};
