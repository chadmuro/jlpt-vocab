import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { H2, ListItem, Separator, XStack } from "tamagui";

import Search from "../../components/common/Search";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { vocabulary } from "../../data/level";
import { formatJapanese } from "../../utils/formatJapanese";

export default function Vocabulary() {
  const [searchVocabulary, setSearchVocabulary] = useState(vocabulary);
  const [search, setSearch] = useState("");

  function handleSearch(text: string) {
    setSearch(text);

    const filteredVocabulary = vocabulary.filter((vocab) => {
      const searchParam = `${vocab.kanji} ${formatJapanese(vocab.japanese)} ${
        vocab.english
      }`;
      return searchParam.includes(text);
    });

    setSearchVocabulary(filteredVocabulary);
  }

  return (
    <SafeAreaView>
      <MyStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>Vocabulary List</H2>
        </XStack>
        <Search
          search={search}
          handleSearch={handleSearch}
        />
        <FlatList
          data={searchVocabulary}
          renderItem={({ item }) => (
            <Link
              href={`/search/${item.id}`}
              asChild
            >
              <Pressable>
                <ListItem>{item.kanji}</ListItem>
              </Pressable>
            </Link>
          )}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      </MyStack>
    </SafeAreaView>
  );
}
