import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: red;
  margin-bottom: 0;
`;

export const BannerContainer = styled.View`
  height: 40%;
  background-color: green;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`;

export const Banner = styled.Image`
  max-height: 180px;
`;

export const Message = styled.Text`
  color: #023F6C;
  font-weight: bold;
  font-size: 18px;
  padding: 16px;
  padding-bottom: 0;
`;

export const SubMessage = styled.Text`
  color: #023F6C;
  font-size: 16px;
  padding: 16px;
  padding-top: 0;
`;