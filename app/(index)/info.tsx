import { useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import { Button, H2, Separator, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { useSettings } from "../../contexts/settingsContext";
import { title, vocabulary } from "../../data/level";

export default function Info() {
  const navigation = useNavigation("/(index)");
  const { updateFirstOpen, settings } = useSettings();

  useEffect(() => {
    if (!settings.firstOpen) {
      const unsubscribe = navigation.addListener("beforeRemove", () =>
        updateFirstOpen()
      );

      return unsubscribe;
    }
  }, []);

  return (
    <MyStack>
      <H2 textAlign="center">{`Welcome to JLPT ${title} Vocabulary Study 🇯🇵`}</H2>
      <Separator
        alignSelf="stretch"
        marginVertical={10}
      />
      <Text fontSize={16}>
        {`The vocabulary list includes ${vocabulary.length} words for the JLPT ${title} exam. You will study 20 new cards per day along with review cards.`}
      </Text>
      <Text fontSize={16}>
        This application uses the supermemo spaced repetition algorithm.
      </Text>
      <Text fontSize={16}>Good luck with your study!</Text>
      <Link
        href="/"
        asChild
      >
        <Button>Got it!</Button>
      </Link>
    </MyStack>
  );
}
