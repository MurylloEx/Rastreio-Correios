import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BannerContainer = styled.View`
  height: 40%;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  max-height: 180px;
  max-width: 80%;
`;

export const Message = styled.Text`
  color: #023F6C;
  font-weight: bold;
  font-size: 21px;
  padding: 38px;
  padding-bottom: 0;
`;

export const SubMessage = styled.Text`
  color: #023F6C;
  text-align: justify;
  font-size: 18px;
  padding: 38px;
  padding-top: 0;
`;