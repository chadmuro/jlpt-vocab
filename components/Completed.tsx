import { Link } from "expo-router";
import LottieView from "lottie-react-native";
import { Button, H4, YStack } from "tamagui";

interface Props {
  text: string;
  link: string;
  buttonText: string;
}

export default function Completed({ text, link, buttonText }: Props) {
  return (
    <YStack gap={10}>
      <H4>{text}</H4>
      <LottieView
        autoPlay
        style={{
          width: "100%",
          height: 300
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/celebrate.json")}
      />
      <Link
        href={link}
        asChild
      >
        <Button>{buttonText}</Button>
      </Link>
    </YStack>
  );
}
