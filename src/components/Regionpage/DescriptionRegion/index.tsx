import { FC } from 'react';
type Props = {
  content: string;
};
export const DescriptionRegion: FC<Props> = ({ content }) => {
  return <p className='lg:w-730 w-80% mt-40 mb-40 mx-auto'>{content}</p>;
};
