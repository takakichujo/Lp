import { FC } from 'react';
type Props = {
  img: string;
  title: string;
};
export const RegionTopImg: FC<Props> = ({ img, title }) => {
  return (
    <div className='relative'>
      <img className=' h-146 mx-auto w-full' src={img} />
      <h2 className='text-23 absolute top-14 left-[500px] text-white'>
        {title}
      </h2>
    </div>
  );
};
