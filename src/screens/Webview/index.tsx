import React, { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../../types/typeRoutes';
import { WebView } from 'react-native-webview';

export default function Webview() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'WebView'>>();
  const [url] = useState(params.url);
  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}
