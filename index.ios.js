import React from 'react';
import { AppRegistry, View } from 'react-native';
import { withProps } from 'recompose';

const RecomposeBug = withProps({
  style: { height: 100, backgroundColor: 'blue' },
})(View);

AppRegistry.registerComponent('RecomposeBug', () => RecomposeBug);
