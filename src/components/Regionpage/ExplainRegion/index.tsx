import { FC } from 'react';
type Props = {
  content: string;
  className?: string;
};
export const ExplainRegion: FC<Props> = ({ content, className }) => {
  return <p className={className}>{content}</p>;
};
