// Screen.tsx
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserListScreen: React.FC = () => {
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <View>
          <Text>Name: {`${userData.name.first} ${userData.name.last}`}</Text>
          <Text>Email: {userData.email}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
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

export default UserListScreen;
