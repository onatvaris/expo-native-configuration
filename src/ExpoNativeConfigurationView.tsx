import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoNativeConfigurationViewProps } from './ExpoNativeConfiguration.types';

const NativeView: React.ComponentType<ExpoNativeConfigurationViewProps> =
  requireNativeViewManager('ExpoNativeConfiguration');

export default function ExpoNativeConfigurationView(props: ExpoNativeConfigurationViewProps) {
  return <NativeView {...props} />;
}
