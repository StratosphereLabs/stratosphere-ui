import {
  Card as DaisyUICard,
  CardProps as DaisyUICardProps,
} from 'react-daisyui';
import { FullScreenLoader } from '../FullScreenLoader';

export interface LoadingCardProps extends DaisyUICardProps {
  isLoading?: boolean;
}

export const LoadingCard = ({
  children,
  isLoading,
  ...props
}: LoadingCardProps): JSX.Element => (
  <DaisyUICard {...props}>
    {isLoading === true ? <FullScreenLoader /> : children}
  </DaisyUICard>
);
