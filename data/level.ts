import { vocabulary as n1Vocabulary } from "./n1/vocabulary";
import { vocabulary as n2Vocabulary } from "./n2/vocabulary";
import { vocabulary as n3Vocabulary } from "./n3/vocabulary";
import { vocabulary as n4Vocabulary } from "./n4/vocabulary";

let vocabulary = n1Vocabulary;
let title = "N1";
let color = "#4169E1";

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N2") {
  vocabulary = n2Vocabulary;
  title = "N2";
  color = "#DC143C";
}

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N3") {
  vocabulary = n3Vocabulary;
  title = "N3";
  color = "#228B22";
}

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N4") {
  vocabulary = n4Vocabulary;
  title = "N4";
  color = "#FFD700";
}

export { color, title, vocabulary };
