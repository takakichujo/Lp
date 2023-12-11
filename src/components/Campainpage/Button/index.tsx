import { FC, ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
export const Button: FC<Props> = ({ children }) => {
  return (
    <button className='bg-deepPink rounded-40 w-280 py-4 px-4 text-offwhite block'>
      {children}
    </button>
  );
};
