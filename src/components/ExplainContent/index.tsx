import { FC } from 'react';
import { ExplainContentInfo } from '../../types';
type Props = {
  title: string;
  span: string;
  info: ExplainContentInfo[];
  content: string;
  anotation: string;
};
export const ExplainContent: FC<Props> = ({
  title,
  span,
  info,
  content,
  anotation,
}) => {
  return (
    <div className='pr-10 pb-3 pl-10 pt-6 bg-white w-480 text-center'>
      <h2 className='text-23 pb-6'>
        {title}
        <span className='text-18'>{span}</span>
      </h2>

      <ul className=''>
        {info.map((item) => {
          return (
            <li className='text-10' key={item.content}>
              {`・${item.content}`}
            </li>
          );
        })}
      </ul>
      <p>{`＜贈品＞${content}`}</p>
      <p>{anotation}</p>
    </div>
  );
};
