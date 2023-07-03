import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import CounterScreen from './screens/counter';
// import LoginScreen from './screens/login';
import ListScreen from './screens/list';
// import UserListScreen from './screens/userlist';

const listItems = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
];

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CounterScreen /> */}
      {/* <LoginScreen /> */}
      <ListScreen items={listItems} />
      {/* <UserListScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
