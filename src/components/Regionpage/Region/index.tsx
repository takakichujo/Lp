import { RegionTop } from '../RegionTop';
import { RegionProducts } from '../RegionProducts';
import { FC } from 'react';
import { RegionInfo } from '../../../types';
import { ReadMore } from '../../Commons/ReadMore';
export const Region: FC<RegionInfo> = ({
  RegionTopImgImg,
  RegionTopImgTitle,
  DescriptionRegionContent,
  RegionProductsArray,
  id,
}) => {
  return (
    <div className='w-full mx-auto mb-40'>
      <RegionTop
        id={id}
        RegionTopImgImg={RegionTopImgImg}
        RegionTopImgTitle={RegionTopImgTitle}
        DescriptionRegionContent={DescriptionRegionContent}
      />
      <RegionProducts array={RegionProductsArray} />
      <ReadMore />
    </div>
  );
};
