import { Link } from "expo-router";
import { Button, H3, H4, YStack } from "tamagui";

interface Props {
  text: string;
  link: string;
  buttonText: string;
}

export default function Completed({ text, link, buttonText }: Props) {
  return (
    <YStack gap={10}>
      <H3>Great job 💪</H3>
      <H4>{text}</H4>
      <Link
        href={link}
        asChild
      >
        <Button>{buttonText}</Button>
      </Link>
    </YStack>
  );
}
