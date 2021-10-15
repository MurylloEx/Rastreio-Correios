import React, { FunctionComponent } from "react";
import { Container, Banner, Message, SubMessage, BannerContainer } from './styles';

export interface LogoProps { }

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Container>
      <BannerContainer>
        <Banner 
          resizeMethod="resize" 
          resizeMode="contain" 
          source={require('../../images/logo.png')}  
        />
      </BannerContainer>
      <Message>
        Olá!
      </Message>
      <SubMessage>
        Adicione sua encomenda para continuar
      </SubMessage>
    </Container>
  );
}