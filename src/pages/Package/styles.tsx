import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Spacer = styled.View`
  height: 32px;
`;

export const ScrollableContainer = styled.ScrollView`
  height: ${Dimensions.get('window').height - 64}px;
`;