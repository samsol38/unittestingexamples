import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

interface Item {
  id: number;
  name: string;
}

interface Props {
  items?: Item[];
}

const ListScreen: React.FC<Props> = ({items = []}) => {
  return (
    <View style={styles.container}>
      <Text>ListScreen Component</Text>
      <ScrollView>
        {items.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});

export default ListScreen;
