import { Progress } from 'react-daisyui';

export const FullScreenLoader = (): JSX.Element => (
  <div className="flex flex-1 items-center justify-center">
    <Progress className="w-56" />
  </div>
);
