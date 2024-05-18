import { vocabulary as n1Vocabulary } from "./n1/vocabulary";
import { vocabulary as n2Vocabulary } from "./n2/vocabulary";
import { vocabulary as n3Vocabulary } from "./n3/vocabulary";

let vocabulary = n2Vocabulary;
if (process.env.EXPO_PUBLIC_APP_VARIANT === "N1") {
  vocabulary = n1Vocabulary;
}

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N3") {
  vocabulary = n3Vocabulary;
}

export { vocabulary };
