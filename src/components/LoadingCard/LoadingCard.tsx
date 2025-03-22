import { Card, CardProps } from '../Card';
import { FullScreenLoader } from '../FullScreenLoader';

export interface LoadingCardProps extends CardProps {
  isLoading?: boolean;
}

export const LoadingCard = ({
  children,
  isLoading,
  ...props
}: LoadingCardProps) => (
  <Card {...props}>{isLoading === true ? <FullScreenLoader /> : children}</Card>
);
