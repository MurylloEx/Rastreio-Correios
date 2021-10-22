import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Spacer = styled.View`
  height: 32px;
`;

export const ScrollableContainer = styled.ScrollView`
  height: ${Dimensions.get('window').height - 64}px;
`;

export const PackageList = styled.FlatList``;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #023F6C;
`;