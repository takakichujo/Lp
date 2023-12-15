import { FC } from 'react';
type Props = {
  title: string;
};
export const SimpleRegionTitle: FC<Props> = ({ title }) => {
  return (
    <span className=' pt-[2px] pr-[5px] pl-[5px] pb-[2px] rounded  bg-deepPink h-23 text-white mx-auto text-[12px] absolute top-[4px] left-[4px]'>
      {title}
    </span>
  );
};
