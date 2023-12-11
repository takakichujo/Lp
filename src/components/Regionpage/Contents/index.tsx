import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { Content } from '../Content';
type Props = {
  array: RegionContentInfo[];
};
export const Contents: FC<Props> = ({ array }) => {
  return (
    <div className='grid grid-cols-4 place-items-center gap-x-0 gap-y-4 w-80% mx-auto'>
      {array.map((item) => (
        <Content
          content={item.content}
          img={item.img}
          title={item.title}
          moneyTitle={item.moneyTitle}
          moneyContent={item.moneyContent}
        />
      ))}
    </div>
  );
};
