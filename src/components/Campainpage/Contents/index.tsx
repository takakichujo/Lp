import { Content } from '../Content';
import { FC } from 'react';
import { ContentInfo } from '../../../types';

type Props = {
  contentsInfoArray: ContentInfo[];
};

export const Contents: FC<Props> = ({ contentsInfoArray }) => {
  return (
    <div className='bg-white ml-2 mr-2 mt-40'>
      <h2 className='text-lg text-center font-bold pt-25'>使用步驟</h2>
      <div className='flex overflow-scroll w-full'>
        {contentsInfoArray.map((contentInfoArray) => (
          <Content
            key={contentInfoArray.contentTitle}
            circleTopName={contentInfoArray.circleTopName}
            circleSpanName={contentInfoArray.circleSpanName}
            circleBottomName={contentInfoArray.circleBottomName}
            img={contentInfoArray.img}
            contentTitle={contentInfoArray.contentTitle}
            contentSentence={contentInfoArray.contentSentence}
            isRed={contentInfoArray.isRed}
          />
        ))}
      </div>
    </div>
  );
};
