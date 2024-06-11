import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoNativeConfiguration.web.ts
// and on native platforms to ExpoNativeConfiguration.ts
import ExpoNativeConfigurationModule from './ExpoNativeConfigurationModule';
import ExpoNativeConfigurationView from './ExpoNativeConfigurationView';
import { ChangeEventPayload, ExpoNativeConfigurationViewProps } from './ExpoNativeConfiguration.types';

// Get the native constant value.
export const PI = ExpoNativeConfigurationModule.PI;

export function hello(): string {
  return ExpoNativeConfigurationModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoNativeConfigurationModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoNativeConfigurationModule ?? NativeModulesProxy.ExpoNativeConfiguration);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoNativeConfigurationView, ExpoNativeConfigurationViewProps, ChangeEventPayload };
