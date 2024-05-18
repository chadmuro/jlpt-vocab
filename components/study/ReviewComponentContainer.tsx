import { useState } from "react";
import dayjs from "dayjs";

import { useStudy } from "../../contexts/studyContext";
import { vocabulary } from "../../data/level";
import { useAskReview } from "../../hooks/useAskReview";
import Review from "../../model/Review";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";
import Completed from "../Completed";

import StudyComponent from "./StudyComponent";

interface Props {
  reviews: Review[];
}

export default function ReviewComponentContainer({ reviews }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { updateReviewCard, updating } = useStudy();
  const { askReview } = useAskReview();

  if (reviews.length === 0) {
    return (
      <Completed
        text="Review completed for the day"
        link="/vocabulary"
        buttonText="Go to home"
      />
    );
  }

  const reviewCard = vocabulary.find(
    (vocab) => vocab.id === reviews[0].vocabularyId
  );

  async function updateStudy(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: reviews[0].interval,
        repetition: reviews[0].repetition,
        efactor: reviews[0].efactor
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    setShowAnswer(false);
    await updateReviewCard(
      reviews[0],
      dueDate,
      interval,
      repetition,
      efactor,
      grade
    );

    // ask review when completing first review
    if (grade !== 0 && reviews.length === 1) {
      askReview();
    }
  }

  return (
    <StudyComponent
      cardData={reviewCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateStudy}
      isUpdating={updating}
    />
  );
}
