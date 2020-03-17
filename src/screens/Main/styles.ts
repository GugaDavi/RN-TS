import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

import { IUser } from '../../types/dataTypes';
import { ButtonProps } from '../../types/styleTypes';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #f2f2f2;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333'
})`
  flex: 1;
  height: 40px;
  background-color: #ccc;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)<ButtonProps>`
  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.6 : 1)};
`;

class IFlatList extends FlatList<IUser> {}

export const List = styled(IFlatList)`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #ccc;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
