import { IUser } from './dataTypes';

export type RootStackParamList = {
  Main: undefined;
  User: { item: IUser };
  WebView: { url: string };
};
