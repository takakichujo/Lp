import { FC } from 'react';
import { ContentInfo } from '../../types';
import { ContentCircle } from '../ContentCircle';
export const Content: FC<ContentInfo> = ({
  circleTopName,
  circleSpanName,
  circleBottomName,
  img,
  contentTitle,
  contentSentence,
  className,
}) => {
  return (
    <div className='w-250 m-20 h-400'>
      <div className='w-220  mt-40 mb-20 ml-20 flex flex-col items-center bg-offwhite p-3 relative flex-shrink-0'>
        <ContentCircle
          circleTopName={circleTopName}
          circleSpanName={circleSpanName}
          circleBottomName={circleBottomName}
          className={className}
        />
        <img src={img} className='w-90 h-230' />
        <p className='font-bold mt-20 text-center text-sm'>{contentTitle}</p>
        <p className='text-sm text-center'>{contentSentence}</p>
      </div>
    </div>
  );
};
