import { vocabulary as n1Vocabulary } from "./n1/vocabulary";
import { vocabulary as n2Vocabulary } from "./n2/vocabulary";
import { vocabulary as n3Vocabulary } from "./n3/vocabulary";
import { vocabulary as n4Vocabulary } from "./n4/vocabulary";

let vocabulary = n1Vocabulary;
let title = "N1";
let color = "#4169E1";
let reviewLink =
  "itms-apps://itunes.apple.com/app/viewContentsUserReviews/id6503351431?action=write-review";

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N2") {
  vocabulary = n2Vocabulary;
  title = "N2";
  color = "#DC143C";
  reviewLink =
    "itms-apps://itunes.apple.com/app/viewContentsUserReviews/id6503351523?action=write-review";
}

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N3") {
  vocabulary = n3Vocabulary;
  title = "N3";
  color = "#228B22";
  reviewLink =
    "itms-apps://itunes.apple.com/app/viewContentsUserReviews/id6503253915?action=write-review";
}

if (process.env.EXPO_PUBLIC_APP_VARIANT === "N4") {
  vocabulary = n4Vocabulary;
  title = "N4";
  color = "#DAA520";
  reviewLink =
    "itms-apps://itunes.apple.com/app/viewContentsUserReviews/id6503353013?action=write-review";
}

export { color, reviewLink, title, vocabulary };
