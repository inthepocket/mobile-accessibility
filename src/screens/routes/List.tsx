import React from 'react';
import { ListRenderItem, ListRenderItemInfo, SectionList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../../components/Header';
import expenses from '../../data/expenses';
import useAccessible from '../../hooks/useAccessible';
import { months } from '../../utils/datetime';

const data = [...months].map(month => {
  return {
    title: month,
    data: expenses(20),
  };
});

function ExpenseItem({ category, description, price, unit }: ReturnType<typeof expenses>[0]) {
  const a11y = useAccessible({
    accessible: true,
    accessibilityHint: description,
    accessibilityLabel: category,
    accessibilityValue: { text: `${unit} ${price}` },
  });

  return (
    <ListItem topDivider bottomDivider {...a11y}>
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
        }}
      >
        <ListItem.Title>{category}</ListItem.Title>
        <ListItem.Subtitle>{description}</ListItem.Subtitle>
      </View>
      <ListItem.Subtitle>
        {unit}
        {price}
      </ListItem.Subtitle>
    </ListItem>
  );
}

const List = () => {
  return (
    <SectionList
      sections={data}
      keyExtractor={item => String(item.price)}
      renderSectionHeader={({ section }) => (
        <Header
          style={{
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: '#efefef',
          }}
        >
          {section.title}
        </Header>
      )}
      renderItem={({ item }) => <ExpenseItem {...item} />}
    />
  );
};

List.title = 'List items';
List.description = 'Important aspects of using a long list of items';
List.tooltip = `
Adding the header role to a long list of items allows your users to quickly navigate down the tree by jumping through the headers.

Let's say that you want to see the items for March in this list. Without the headers you would need to scroll down trough a lot of items using the screen reader until you've reached March!

Another important aspect here is the way the list items are represented to the user. Without any modifications to the accessibility properties of the list item, they visually look the same, but sound completely different to the screen reader.
If you disable the accessibility mode on the previous screen you will see that the screen reader will read out the 3 text elements (title, description & price) separately. That's a lot of context to take into account.

Re-enable the accessibility mode and you will see that list items are read out differently this time: they contain a clear label for accessibility (the primary content), a hint for side info (the description) and a value for the item (price).
`;

export default List;
