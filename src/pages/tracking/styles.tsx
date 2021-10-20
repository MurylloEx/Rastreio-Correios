import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Spacer = styled.View`
  height: 32px;
`;

export const ScrollableContainer = styled.ScrollView`
  height: ${Dimensions.get('window').height - 64}px;
`;

export const ButtonBack = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: #023F6C;
  padding: 10px;
  margin: 12px;
  width: 100%;
  max-width: 50%;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  color: #FFF;
  font-size: 18px;
  text-align: center;
  align-items: center;
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;