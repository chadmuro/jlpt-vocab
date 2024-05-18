const IS_N1_APP = process.env.APP_VARIANT === "N1";
const IS_N2_APP = process.env.APP_VARIANT === "N2";
const IS_N3_APP = process.env.APP_VARIANT === "N3";
const IS_N4_APP = process.env.APP_VARIANT === "N4";

export default {
  expo: {
    scheme: "jlpt-app",
    userInterfaceStyle: "automatic",
    splash: {
      backgroundColor: "#FF554E",
      image: "./assets/splash.png",
      resizeMode: "contain"
    },
    icon: "./assets/icon.png",
    name: IS_N2_APP
      ? "JLPT N2 Vocab"
      : IS_N3_APP
      ? "JLPT N3 Vocab"
      : IS_N4_APP
      ? "JLPT N4 Vocab"
      : "JLPT N1 Vocab",
    slug: "jlpt-vocab",
    version: "1.0.0",
    plugins: [
      "expo-router",
      "expo-build-properties",
      "@morrowdigital/watermelondb-expo-plugin"
    ],
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "961046a3-ed14-4118-96da-8749aed168d5"
      }
    },
    orientation: "portrait",
    ios: {
      bundleIdentifier: IS_N2_APP
        ? "com.chadmuro.jlptvocab.n2"
        : IS_N3_APP
        ? "com.chadmuro.jlptvocab.n3"
        : IS_N4_APP
        ? "com.chadmuro.jlptvocab.n4"
        : "com.chadmuro.jlptvocab.n1",
      buildNumber: "1",
      supportsTablet: false,
      privacyManifests: {
        NSPrivacyAccessedAPITypes: [
          {
            NSPrivacyAccessedAPIType:
              "NSPrivacyAccessedAPICategoryFileTimestamp",
            NSPrivacyAccessedAPITypeReasons: ["DDA9.1"]
          },
          {
            NSPrivacyAccessedAPIType:
              "NSPrivacyAccessedAPICategoryUserDefaults",
            NSPrivacyAccessedAPITypeReasons: ["CA92.1"]
          },
          {
            NSPrivacyAccessedAPIType:
              "NSPrivacyAccessedAPICategorySystemBootTime",
            NSPrivacyAccessedAPITypeReasons: ["35F9.1"]
          },
          {
            NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategoryDiskSpace",
            NSPrivacyAccessedAPITypeReasons: ["E174.1"]
          }
        ]
      }
    }
  }
};
