import { FC } from 'react';
type Props = {
  message: string;
};
export const MoneyMessage: FC<Props> = ({ message }) => {
  return <p>{message}</p>;
};
