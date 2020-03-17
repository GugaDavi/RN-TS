import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../../types/typeRoutes';
import { IUser, IRepoStar } from '../../types/dataTypes';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Author,
  Info,
  OwnerAvatar,
  Starred,
  Stars,
  Title
} from './styles';

const User: React.FC = () => {
  console.disableYellowBox = true;
  const { params } = useRoute<RouteProp<RootStackParamList, 'User'>>();
  const { navigate } = useNavigation();
  const [user] = useState<IUser>(params.item);
  const [stars, setStarts] = useState<IRepoStar[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMoreRepos, setLoadingMoreRepos] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    async function getReposStarts() {
      setLoading(true);
      const resp = await api.get<IRepoStar[]>(`/users/${user.login}/starred`);

      setStarts(resp.data);
      setLoading(false);
    }

    getReposStarts();
  }, []);

  async function loadMore() {
    if (!loadingMoreRepos) {
      setLoadingMoreRepos(true);
      const resp = await api.get<IRepoStar[]>(`/users/${user.login}/starred`, {
        params: {
          page
        }
      });

      console.tron.log(resp.data.length);

      setStarts([...stars, ...resp.data]);
      setPage(page + 1);
      setLoadingMoreRepos(false);
    }
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar_url }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      {loading ? (
        <ActivityIndicator color="#7159c1" size="large" style={{ flex: 1 }} />
      ) : (
        <Stars
          data={stars}
          keyExtractor={start => String(start.id)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate('WebView', { url: item.html_url })}>
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title numberOfLines={1}>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            </TouchableOpacity>
          )}
        />
      )}
      {loadingMoreRepos && (
        <ActivityIndicator
          color="#7159c1"
          size="large"
          style={{ position: 'absolute', bottom: 50, right: 50 }}
        />
      )}
    </Container>
  );
};

export default User;
