import { FC } from 'react';
import { SimpleRegion } from '../SimpleRegion';
import { SimpleRegionsInfo } from '../../../lib/const/SimpleRegionsInfo';
import { Scroll } from '../../../Utils/ref';
export const SimpleRegions: FC = () => {
  return (
    <ul>
      {SimpleRegionsInfo.map((item) => (
        <li
          className='mb-[10px]'
          key={item.simpleRegionImg}
          onClick={() => Scroll(`メイン${item.id}`)}
        >
          <SimpleRegion
            simpleRegionImg={item.simpleRegionImg}
            simpleRegionTitleContent={item.simpleRegionTitleContent}
            simpleProductsImages={item.simpleProductsImages}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
};
