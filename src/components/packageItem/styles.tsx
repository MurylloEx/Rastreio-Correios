import styled from "styled-components/native";

export type ContainerProps = {
  color: string,
  backgroundColor: string
}

export type TitleProps = {
  color: string
}

export const Container = styled.TouchableOpacity.attrs<ContainerProps>(props => props)<ContainerProps>`
  height: 85px;
  margin: 18px 16px;
  border-radius: 8px;
  border-top-width: 8px;
  border-top-color: ${props => props.color}; 
  background-color: ${props => props.backgroundColor};
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
`;

export const CodeRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
`; 

export const Title = styled.Text.attrs<TitleProps>(props => props)<TitleProps>`
  flex: 1;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: bold;
  padding-left: 8px;
  color: ${props => props.color};
`;

export const TrackCode = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  font-size: 18px;
  padding-left: 33px
`;
