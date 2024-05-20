import { Info } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Button, Circle, H2, Text, View, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useSettings } from "../../contexts/settingsContext";
import { useStudy } from "../../contexts/studyContext";
import { color } from "../../data/level";

export default function Home() {
  const { settings } = useSettings();
  const { study, reviewCards } = useStudy();
  const router = useRouter();

  const vocabularyIds = study ? JSON.parse(study.vocabularyIds) : [];
  const totalStudyCards = vocabularyIds.length;
  const totalReviewCards = reviewCards.length;

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  return (
    <SafeAreaView
      onLayout={() => {
        if (!settings.firstOpen) {
          router.push("/info");
        }
      }}
    >
      <MyStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>Today&apos;s Study</H2>
          <Link href="/info">
            <Info />
          </Link>
        </XStack>
        <View>
          <Button
            size="$6"
            onPress={() => handlePress("study")}
          >
            Study
          </Button>
          {totalStudyCards > 0 && (
            <Circle
              position="absolute"
              right={10}
              top={10}
              backgroundColor={color}
              display="flex"
              size="$4"
              justifyContent="center"
              alignContent="center"
            >
              <Text>{totalStudyCards}</Text>
            </Circle>
          )}
        </View>
        <View>
          <Button
            size="$6"
            onPress={() => handlePress("review")}
          >
            Review
          </Button>
          {totalReviewCards > 0 && (
            <Circle
              position="absolute"
              right={10}
              top={10}
              backgroundColor={color}
              display="flex"
              size="$4"
              justifyContent="center"
              alignContent="center"
            >
              <Text>{totalReviewCards}</Text>
            </Circle>
          )}
        </View>
      </MyStack>
    </SafeAreaView>
  );
}
