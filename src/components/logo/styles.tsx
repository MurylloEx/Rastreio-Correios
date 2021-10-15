import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 48px auto;
  margin-bottom: 0;
  max-height: 40%;
  max-width: 70%;
`;

export const BannerContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`;

export const Banner = styled.Image`
  height: 70%;
  max-height: 180px;
`;

export const Message = styled.Text`
  color: #023F6C;
  font-weight: bold;
  font-size: 18px;
`;

export const SubMessage = styled.Text`
  color: #023F6C;
  font-size: 16px;
  padding: 8px 0;
`;