import { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import { useRouter } from "expo-router";
import { Button, Circle, ScrollView, Text, View } from "tamagui";

import { useStudy } from "../contexts/studyContext";
import { color } from "../data/level";
import Settings from "../model/Settings";

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

interface Props {
  settings: Settings;
  totalVocabularyCount: number;
  totalGrammarCount: number;
  totalKanjiCount: number;
}

const TopButtons = ({ settings, totalVocabularyCount }: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const { getTodaysReview, getTodaysStudy } = useStudy();

  let displayStudy = ["vocabulary", "grammar", "kanji"];
  if (settings.displayContent) {
    displayStudy = settings.displayContent.split(",");
  }

  const showVocabulary = displayStudy.includes("vocabulary");

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    if (showVocabulary) {
      await getTodaysStudy();
      await getTodaysReview();
    }

    setRefreshing(false);
  }, []);

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  return (
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
      {showVocabulary && (
        <View>
          <Button
            size="$6"
            onPress={() => handlePress("vocabulary")}
          >
            Vocabulary
          </Button>
          {totalVocabularyCount > 0 && (
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
              <Text>{totalVocabularyCount}</Text>
            </Circle>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const EnhancedTopButtons = enhance(TopButtons);
export default EnhancedTopButtons;
