import { FC } from 'react';
type Props = {
  img: string;
};
export const TopImage: FC<Props> = ({ img }) => {
  return (
    <h1>
      <img src={img} />
    </h1>
  );
};
