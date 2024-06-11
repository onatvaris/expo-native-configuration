package expo.modules.nativeconfiguration

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoNativeConfigurationModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoNativeConfiguration")

    Function("getApiKey") {
      return@Function "api-key"
    }
  }
}
