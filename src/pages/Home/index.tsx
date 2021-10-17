import React, { Fragment} from 'react';
import { Logo, Input, Button } from '../../components';
import { ContainerInput, Spacer } from './styles';
 
export const Home = () => {
  return (
    <Fragment>
      <Spacer />
      <Logo />
      <ContainerInput>
        <Input placeholder="Informe o código"/>
        <Button title="Rastrear" onPress={() => {}} />
      </ContainerInput> 
    </Fragment>
  )
}