import { FC } from 'react';
type Props = {
  title: string;
};
export const SimpleRegionTitle: FC<Props> = ({ title }) => {
  return (
    <span className=' pt-2 pr-5 pl-2 pl-5 pb-2 rounded-40  bg-deepPink h-23 text-white mx-auto text-18'>
      {title}
    </span>
  );
};
