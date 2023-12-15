import { FC } from 'react';
type Props = {
  circleTopName: string;
  circleSpanName: string;
  circleBottomName: string;
};
export const ContentCircle: FC<Props> = ({
  circleTopName,
  circleSpanName,
  circleBottomName,
}) => {
  const bgColor = circleTopName === "贈品" ? "red" : "blue"
  
  return (
    <div
      className={`w-60 h-60 rounded-full absolute -top-10 -left-10 bg-${bgColor}-500`}
    >
      <p className='text-white text-xs pt-2 text-center'>
        {circleTopName}
        <span className='text-sm'>{circleSpanName}</span>
      </p>
      <p className='text-white text-xs text-center'>{circleBottomName}</p>
    </div>
  );
};
