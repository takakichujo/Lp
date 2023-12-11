import { FC } from 'react';
import { ExplainContentInfo } from '../../../types';
type Props = {
  title: string;
  span: string;
  info: ExplainContentInfo[];
  content: string;
  anotation: string;
  className?: string;
};
export const ExplainContent: FC<Props> = ({
  title,
  span,
  info,
  content,
  anotation,
  className,
}) => {
  return (
    <div
      className={`pr-10 pb-3 pl-10 pt-6 bg-white lg:w-480 w-90% mx-auto text-center ${className}`}
    >
      <h2 className='text-23 pb-6 text-blue-500'>
        {title}
        <span className='text-18'>{span}</span>
      </h2>

      <ul>
        {info.map((item) => {
          return (
            <li className='lg:text-10 text-18' key={item.content}>
              {`・${item.content}`}
            </li>
          );
        })}
      </ul>
      <p className='text-red-500 text-10'>{`＜贈品＞${content}`}</p>
      <p>{anotation}</p>
    </div>
  );
};
