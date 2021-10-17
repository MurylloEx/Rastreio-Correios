import React, { Fragment, useState} from 'react';
import { Logo, Input, Button } from '../../components';
import { ContainerInput, Spacer } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/core';

export const Home = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  function navigateToTrackingPage(){
    navigation.navigate("Tracking", {value})
  }

  return (
    <Fragment>
      <Spacer />
      <Logo />
      <ContainerInput>
        <Input value={value} onChangeText={setValue} placeholder="Informe o código"/>
        <Spacer />
        <BouncyCheckbox
          size={25}
          fillColor="#023F6C"
          text="Adicionar este código a minha lista de produtos."
          textStyle={{ color: "#023F6C" }}
          iconStyle={{ borderColor: "#023F6C" }}
          onPress={(isChecked: boolean) => {}}
        />
        <Button title="Rastrear" onPress={navigateToTrackingPage}/>
      </ContainerInput>       
    </Fragment>
  )
}