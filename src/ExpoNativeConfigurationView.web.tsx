import * as React from 'react';

import { ExpoNativeConfigurationViewProps } from './ExpoNativeConfiguration.types';

export default function ExpoNativeConfigurationView(props: ExpoNativeConfigurationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
