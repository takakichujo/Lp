import { CampainProduct } from '../CampainProduct';
import { FC } from 'react';
import { ContentInfo } from '../../../types';

type Props = {
  contentsInfoArray: ContentInfo[];
};

export const CampainProducts: FC<Props> = ({ contentsInfoArray }) => {
  return (
    <div className='bg-white ml-2 mr-2 mt-40 h-540'>
      <h2 className='text-lg text-center font-bold pt-25'>使用步驟</h2>
      <div className='flex overflow-x-scroll w-full'>
        {contentsInfoArray.map((contentInfoArray) => (
          <CampainProduct
            key={contentInfoArray.contentTitle}
            circleTopName={contentInfoArray.circleTopName}
            circleSpanName={contentInfoArray.circleSpanName}
            circleBottomName={contentInfoArray.circleBottomName}
            img={contentInfoArray.img}
            contentTitle={contentInfoArray.contentTitle}
            contentSentence={contentInfoArray.contentSentence}
            circleBg={
              contentInfoArray.circleTopName === '贈品' ? 'red' : 'blue'
            }
          />
        ))}
      </div>
    </div>
  );
};
