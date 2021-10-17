import React, { Fragment} from 'react';
import { Logo, Input, Button } from '../../components';
import { ContainerInput } from './styles';
 
export const Home = () => {
  return (
    <Fragment>
      <Logo />
      <ContainerInput>
        <Input placeholder="Informe o código"/>
        <Button title="Rastrear"/>
      </ContainerInput>       
    </Fragment>
  )
}