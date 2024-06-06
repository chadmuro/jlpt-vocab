import { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { Info } from "@tamagui/lucide-icons";
import * as Haptics from "expo-haptics";
import { Link, useRouter } from "expo-router";
import { Button, Circle, H2, ScrollView, Text, View, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useSettings } from "../../contexts/settingsContext";
import { useStudy } from "../../contexts/studyContext";
import { color } from "../../data/level";

export default function Home() {
  const { settings } = useSettings();
  const { study, reviewCards, getTodaysReview, getTodaysStudy } = useStudy();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const vocabularyIds = study ? JSON.parse(study.vocabularyIds) : [];
  const totalStudyCards = vocabularyIds.length;
  const totalReviewCards = reviewCards.length;

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await getTodaysStudy();
    await getTodaysReview();

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setRefreshing(false);
  }, []);

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
        <ScrollView
          flex={1}
          space="$true"
          refreshControl={
            <RefreshControl
              tintColor={color}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View>
            <Button
              size="$6"
              onPress={() => handlePress("study")}
            >
              Study
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
                  <Text color="white">{totalStudyCards}</Text>
                </Circle>
              )}
            </Button>
          </View>
          <View>
            <Button
              size="$6"
              onPress={() => handlePress("review")}
            >
              Review
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
                  <Text color="white">{totalReviewCards}</Text>
                </Circle>
              )}
            </Button>
          </View>
        </ScrollView>
      </MyStack>
    </SafeAreaView>
  );
}
