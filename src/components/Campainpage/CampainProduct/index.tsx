import { FC } from 'react';
import { ContentInfo } from '../../../types';
import { ContentCircle } from '../../Commons/ContentCircle';
export const CampainProduct: FC<ContentInfo> = ({
  circleTopName,
  circleSpanName,
  circleBottomName,
  img,
  contentTitle,
  contentSentence,
}) => {
  return (
    <div className='w-280 m-20 h-400'>
      <div className='w-220  mt-40 mb-20 ml-20 mr-20 h-380 flex flex-col items-center bg-offwhite p-3 relative flex-shrink-0'>
        <ContentCircle
          circleTopName={circleTopName}
          circleSpanName={circleSpanName}
          circleBottomName={circleBottomName}
        />
        <img src={img} className='w-90 h-230 object-cover' />
        <p className='font-bold mt-20 text-center text-sm'>{contentTitle}</p>
        <p className='text-sm text-center'>{contentSentence}</p>
      </div>
    </div>
  );
};
