import { Text } from "tamagui";

import TitleWithBack from "../../components/common/BackButtonTitle";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import ReviewComponent from "../../components/study/ReviewComponentContainer";
import { useStudy } from "../../contexts/studyContext";

export default function Review() {
  const { reviewCards } = useStudy();

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Review" />
        <Text>{reviewCards.length} cards remaining</Text>
        <ReviewComponent reviews={reviewCards} />
      </MyStack>
    </SafeAreaView>
  );
}
