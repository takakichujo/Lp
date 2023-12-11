import { FC } from 'react';
type Props = {
  img: string;
};
export const CampainTopImage: FC<Props> = ({ img }) => {
  return (
    <h1>
      <img
        src={img}
        className='lg:w-1021 lg:h-376 lg:ml-10 m-0 w-full min-h-full object-contain'
      />
    </h1>
  );
};
