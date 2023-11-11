import type { IUser } from '@/App.types';

export interface IPropsFooter {
  user?: IUser;
  incrAge: () => void;
}

export interface IFooterEmits {
  (e: 'footerEmit', value: string): void;
}
