import { ReactNode } from '../node_modules/react';
type DecoratorProps = {
    children: ReactNode | ReactNode[];
    title: string;
    description: string;
    source: string;
};
export declare const Decorator: ({ children, title, description, source, }: DecoratorProps) => import("react/jsx-runtime").JSX.Element;
export default Decorator;
