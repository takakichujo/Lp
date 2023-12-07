import { FC } from 'react';
import { ExplainContentInfo } from '../../types';
type Props = {
  title: string;
  span: string;
  info: ExplainContentInfo[];
  content?: string;
};
export const ExplainContent: FC<Props> = ({ title, span, info, content }) => {
  return (
    <div className='pr-10 pb-10 pl-10'>
      <h2>{title}</h2>
      <span>{span}</span>
      <ul>
        {info.map((item) => {
          return <li key={item.content}>{item.content}</li>;
        })}
      </ul>
      <p>{`＜贈品＞${content}`}</p>
    </div>
  );
};
