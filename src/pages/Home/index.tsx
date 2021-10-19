import React, { Fragment, useState} from 'react';
import { ContainerInput, Spacer } from './styles';
import { Logo, Input, Button, Render, Loading } from '../../components';
import { useNavigation } from '@react-navigation/core';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { validateCode } from '../../services/validation';
import { Alert } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function navigateToTrackingPage(){
    navigation.navigate("Tracking", {
      screen: 'Tracking',
      params: {value}
    })
  }

  async function onVerifyCode(){
    if (validateCode(value)){
      navigateToTrackingPage();
      onClearFields();
    } else {
      Alert.alert(
        "Não achamos seu pacote.",
        "Verifique o código de rastreio.");
    }
  }

  function onClearFields(){
    setValue('');
    setIsLoading(false);
  }

  return (
    <Fragment>
      <Render if={!isLoading}>
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
          <Button title="Rastrear" onPress={onVerifyCode}/>
        </ContainerInput>
      </Render>
      <Render if={isLoading}>
        <Loading />
      </Render>
    </Fragment>
  )
}