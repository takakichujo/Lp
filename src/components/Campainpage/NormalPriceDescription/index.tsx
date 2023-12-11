import { FC } from 'react';
type Props = {
  message: string;
  className?: string;
};
export const NormalPriceDescription: FC<Props> = ({ message, className }) => {
  return <p className={className}>{message}</p>;
};
