import { FC } from 'react';
import { UnionSimpleImgTitle } from '../UnionSimpleImgTitle';
import { SimpleProducts } from '../SimpleProducts';
import { SimpleProductInfo } from '../../../types';
type Props = {
  simpleRegionImg: string;
  simpleRegionTitleContent: string;
  simpleProductsImages: SimpleProductInfo[];
};
export const SimpleRegion: FC<Props> = ({
  simpleRegionImg,
  simpleRegionTitleContent,
  simpleProductsImages,
}) => {
  return (
    <div className='w-[460px] h-[85px] flex mb-[10px] bg-deepPink'>
      <UnionSimpleImgTitle
        simpleRegionImg={simpleRegionImg}
        simpleRegionTitleContent={simpleRegionTitleContent}
      />
      <SimpleProducts images={simpleProductsImages} />
    </div>
  );
};
