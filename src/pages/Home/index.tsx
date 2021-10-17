import React, { Fragment, useState} from 'react';
import { Logo, Input, Button } from '../../components';
import { ContainerInput, Spacer } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Fragment>
      <Logo />
      <ContainerInput>
        <Input placeholder="Informe o código"/>
        <Spacer />
        <BouncyCheckbox
          size={25}
          fillColor="#023F6C"
          text="Adicionar este código a minha lista de produtos."
          textStyle={{ color: "#023F6C" }}
          iconStyle={{ borderColor: "#023F6C" }}
          onPress={(isChecked: boolean) => {}}
        />
        <Button title="Rastrear"/>
      </ContainerInput>       
    </Fragment>
  )
}