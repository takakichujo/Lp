import { SimpleRegionTitle } from '../SimpleRegionTitle';
import { SimpleRegionImg } from '../SimpleRegionImg';
import { FC } from 'react';
type Props = {
  simpleRegionImg: string;
  simpleRegionTitleContent: string;
};
export const UnionSimpleImgTitle: FC<Props> = ({
  simpleRegionImg,
  simpleRegionTitleContent,
}) => {
  return (
    <div className='relative w-full'>
      <SimpleRegionImg img={simpleRegionImg} />
      <SimpleRegionTitle title={simpleRegionTitleContent} />
    </div>
  );
};
