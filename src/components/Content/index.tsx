import { FC } from 'react';
type Props = {
  circleTopName: string;
  circleSpanName: string;
  circleBottomName: string;
  img: string;
  contentTitle: string;
  contentSentence: string;
};
export const Content: FC<Props> = ({
  circleTopName,
  circleSpanName,
  circleBottomName,
  img,
  contentTitle,
  contentSentence,
}) => {
  return (
    <div className='w-220 h-400 mt-40 mr-20 mb-20 ml-10 flex flex-col justify-center items-center bg-offwhite p-3'>
      <div className='w-60 h-60 bg-blue-500 rounded-full absolute top-5 left-0'>
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
  );
};
