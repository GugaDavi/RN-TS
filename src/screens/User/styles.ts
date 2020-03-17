import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { IRepoStar } from '../../types/dataTypes';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Loading = styled.ActivityIndicator`
  color: #7159c1;
  width: 100px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #999;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

class IFlatList extends FlatList<IRepoStar> {}

export const Stars = styled(IFlatList)`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background-color: #ccc;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  margin-top: 2px;
  color: #666;
`;
