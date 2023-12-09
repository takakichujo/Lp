import { FC } from 'react';
import { TopImage } from '../TopImage';
import { Top } from '../Top';
import { Bottom } from '../Bottom';
export const Campain: FC = () => {
  return (
    <div className='mx-auto'>
      <TopImage img='../src/img/fancl_top.webp' />
      <Top />
      <Bottom />
    </div>
  );
};
