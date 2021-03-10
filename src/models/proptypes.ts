import { User } from './types';

export interface ProfileExtensionProps {
    name: string;
    imgUrl: string;
}

export interface ProfileProps {
    user: User;
    onClickName: Function;
}