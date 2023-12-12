import { RegionTopImg } from '../RegionTopImg';
import { DescriptionRegion } from '../DescriptionRegion';
import { FC } from 'react';
type Props = {
  RegionTopImgImg: string;
  RegionTopImgTitle: string;
  DescriptionRegionContent: string;
};
export const RegionTop: FC<Props> = ({
  RegionTopImgImg,
  RegionTopImgTitle,
  DescriptionRegionContent,
}) => {
  return (
    <div>
      <RegionTopImg img={RegionTopImgImg} title={RegionTopImgTitle} />
      <DescriptionRegion content={DescriptionRegionContent} />
    </div>
  );
};
