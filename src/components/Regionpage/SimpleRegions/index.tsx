import { FC } from 'react';
import { SimpleRegion } from '../SimpleRegion';
import { SimpleRegionsInfo } from '../../../lib/const/SimpleRegionsInfo';

export const SimpleRegions: FC = () => {
  return (
    <ul>
      {SimpleRegionsInfo.map((item) => (
        <li className='mb-[10px]' key={item.simpleRegionImg}>
          <SimpleRegion
            simpleRegionImg={item.simpleRegionImg}
            simpleRegionTitleContent={item.simpleRegionTitleContent}
            simpleProductsImages={item.simpleProductsImages}
          />
        </li>
      ))}
    </ul>
  );
};
