import { FC } from 'react';
import './index.css';
type Props = {
  className: string;
};
export const Baloon: FC<Props> = ({ className }) => {
  return <div className={`balloon3 ${className}`}>贈品</div>;
};
