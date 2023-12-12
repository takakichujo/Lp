import { RegionTop } from '../RegionTop';
import { RegionProducts } from '../RegionProducts';
import { FC } from 'react';
import { RegionInfo } from '../../../types';
export const Region: FC<RegionInfo> = ({
  RegionTopImgImg,
  RegionTopImgTitle,
  DescriptionRegionContent,
  RegionProductsArray,
}) => {
  return (
    <div className='w-80% mx-auto mb-40'>
      <RegionTop
        RegionTopImgImg={RegionTopImgImg}
        RegionTopImgTitle={RegionTopImgTitle}
        DescriptionRegionContent={DescriptionRegionContent}
      />
      <RegionProducts array={RegionProductsArray} />
    </div>
  );
};
