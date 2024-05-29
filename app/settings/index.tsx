import { Alert, Linking } from "react-native";
import {
  AlarmClock,
  ChevronRight,
  ClipboardCopy,
  Mail,
  Pencil
} from "@tamagui/lucide-icons";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import * as MailComposer from "expo-mail-composer";
import { H2, ListItem, Separator, YGroup } from "tamagui";

import SettingsDialog from "../../components/Dialog";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import ThemeContent from "../../components/settings/ThemeContent";
import ThemeItem from "../../components/settings/ThemeItem";
import { useSettings } from "../../contexts/settingsContext";
import { title } from "../../data/level";

export default function Settings() {
  const { settings } = useSettings();

  async function copyToClipboard() {
    await Clipboard.setStringAsync("chadmurodev@gmail.com");
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert(
      "Email copied to clipboard",
      "👋 Looking forward to hearing from you soon!"
    );
  }

  async function onContactPress() {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      const mailResult = await MailComposer.composeAsync({
        recipients: ["chadmurodev@gmail.com"],
        subject: `JLPT ${title} Vocab`
      });

      if (mailResult.status === MailComposer.MailComposerStatus.SENT) {
        Alert.alert(
          "Thank you for your email!",
          "🤙 We will get back to you as soon as possilble"
        );
      }
    } else {
      Linking.openURL("mailto:chadmurodev@gmail.com");
    }
  }

  return (
    <SafeAreaView>
      <MyStack>
        <H2>Settings</H2>
        <YGroup
          alignSelf="center"
          bordered
          size="$5"
          separator={<Separator />}
        >
          <YGroup.Item>
            <SettingsDialog
              trigger={<ThemeItem settings={settings} />}
              content={<ThemeContent settings={settings} />}
              title="Theme"
              description="System, dark, or light mode"
            />
          </YGroup.Item>

          {/* <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Reminder"
              subTitle="Not set"
              icon={AlarmClock}
              iconAfter={ChevronRight}
            />
          </YGroup.Item> */}
        </YGroup>

        <YGroup
          alignSelf="center"
          bordered
          size="$5"
          separator={<Separator />}
        >
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Send an email"
              icon={Mail}
              iconAfter={ChevronRight}
              onPress={onContactPress}
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Copy email to clipboard"
              icon={ClipboardCopy}
              iconAfter={ChevronRight}
              onPress={copyToClipboard}
            />
          </YGroup.Item>
          {/* <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Write a review"
              icon={Pencil}
              iconAfter={ChevronRight}
              onPress={() =>
                Linking.openURL(
                  `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id6467766242?action=write-review`
                )
              }
            />
          </YGroup.Item> */}
        </YGroup>
      </MyStack>
    </SafeAreaView>
  );
}
