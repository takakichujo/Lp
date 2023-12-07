import { Content } from '../Content';
import { FC } from 'react';
import { ContentInfo } from '../../types';

type Props = {
  contentsInfoArray: ContentInfo[];
};

export const Contents: FC<Props> = ({ contentsInfoArray }) => {
  return (
    <div className='pl-10 pr-5 w-1000 bg-white'>
      <h2 className='text-lg text-center font-bold mt-20'>使用步驟</h2>
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
          />
        ))}
      </div>
    </div>
  );
};
