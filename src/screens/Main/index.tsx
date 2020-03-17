import React, { useState, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText
} from './styles';

import { IUser } from '../../types/dataTypes';

const Main: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [newUser, setNewUser] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function getDevs() {
      const devs = await AsyncStorage.getItem('users');
      if (devs) {
        setUsers(JSON.parse(devs));
      }
    }
    getDevs();
  }, []);

  useEffect(() => {
    async function updateDB() {
      await AsyncStorage.setItem('users', JSON.stringify(users));
      const dev = await AsyncStorage.getItem('users');
      console.tron.log(dev);
    }
    updateDB();
  }, [users]);

  async function handleAddNewUser() {
    setLoading(true);
    const resp = await api.get<IUser>(`/users/${newUser}`);

    setUsers([...users, resp.data]);
    setNewUser('');
    Keyboard.dismiss();
    setLoading(false);
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usúario"
          value={newUser}
          onChangeText={(t: string) => setNewUser(t)}
          returnKeyType="send"
          onSubmitEditing={handleAddNewUser}
        />
        <SubmitButton onPress={handleAddNewUser} loading={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="add" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        showsVerticalScrollIndicator={false}
        keyExtractor={user => user.login}
        renderItem={({ item }) => (
          <User>
            <Avatar source={{ uri: item.avatar_url }} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>

            <ProfileButton onPress={() => navigate('User', { item })}>
              <ProfileButtonText>Ver Perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
};

export default Main;
