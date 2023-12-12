import { FC } from 'react';
type Props = {
  content: string;
};
export const DescriptionRegion: FC<Props> = ({ content }) => {
  return <p className='w-730 mt-40 mb-40 mx-auto'>{content}</p>;
};
