import { FC } from 'react';
import { RegionsInfo } from '../../../lib/const/RegionsInfo';
import { Region } from '../Region';

export const Regions: FC = () => {
  return (
    <div>
      {RegionsInfo.map((item) => (
        <Region
          id={item.id}
          key={item.DescriptionRegionContent}
          RegionTopImgImg={item.RegionTopImgImg}
          RegionTopImgTitle={item.RegionTOpImgTitle}
          DescriptionRegionContent={item.DescriptionRegionContent}
          RegionProductsArray={item.RegionProductsArray}
        />
      ))}
    </div>
  );
};
