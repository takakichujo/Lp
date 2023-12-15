import { FC } from 'react';
import { UnionSimpleImgTitle } from '../UnionSimpleImgTitle';
import { SimpleProducts } from '../SimpleProducts';
import { SimpleProductInfo } from '../../../types';
type Props = {
  simpleRegionImg: string;
  simpleRegionTitleContent: string;
  simpleProductsImages: SimpleProductInfo[];
  id: string;
};
export const SimpleRegion: FC<Props> = ({
  simpleRegionImg,
  simpleRegionTitleContent,
  simpleProductsImages,
  id,
}) => {
  return (
    <div className='w-full h-[90px] flex mb-[10px]' id={id}>
      <UnionSimpleImgTitle
        simpleRegionImg={simpleRegionImg}
        simpleRegionTitleContent={simpleRegionTitleContent}
      />
      <SimpleProducts images={simpleProductsImages} />
    </div>
  );
};
