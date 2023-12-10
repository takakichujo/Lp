import { FC } from 'react';
import './index.css';
type Props = {
  className: string;
};
export const Baloon: FC<Props> = ({ className }) => {
  return <span className={`balloon3 ${className}`}>贈品</span>;
};
