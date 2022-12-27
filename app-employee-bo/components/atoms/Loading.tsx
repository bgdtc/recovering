import { ActivityIndicator } from 'react-native';

export const Loading = () => {
  return (<ActivityIndicator color={'rgb(250,16,105)'} animating={true} size="large" />);
};