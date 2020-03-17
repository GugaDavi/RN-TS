import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';

declare global {
  interface Console {
    tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
  }
}
