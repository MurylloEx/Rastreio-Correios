import React, { Fragment, useEffect, useState} from 'react';
import Timeline from 'react-native-timeline-flatlist'
import { Spacer } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Loading, Render } from '../../components';
import { getTrackInfo } from '../../api/client';
import { Alert, StyleSheet } from 'react-native';

export const Tracking = () => {
  const [data, setData] = useState([{date: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', hour: '08:00'}])

  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    let isActive = true;

    navigation.setOptions({
      title: Object(route?.params).value
    });
    
    async function getCodeInfo(){
      let response = await getTrackInfo(Object(route?.params).value);

      if (isActive){
        if (response == false){
          Alert.alert("Código de rastreio inválido!", "O pacote não foi encontrado em nossa base de dados de rastreio. É possível que o código ainda não esteja disponível.");
        } else {
          setIsLoading(false);
          console.log(response);
        }
      }
    }

    if (isActive)
      getCodeInfo();

    return () => {
      isActive = false;
    }
  }, []);

  return (
    <Fragment>
      <Render if={!isLoading}>
        <Spacer />
        <Timeline
          data={data}
          style={styles.timeline}
          circleColor='#FDDB00'
          lineColor='#023F6C'
          timeStyle={styles.time}
          titleStyle={styles.title}
          descriptionStyle={styles.description}
        />
      </Render>

      <Render if={isLoading}>
        <Loading />
      </Render>
      
    </Fragment>
  )
}

const styles = StyleSheet.create({
  timeline: { marginLeft: 12 },
  time: { 
    textAlign: 'center', 
    backgroundColor:'#023F6C', 
    color:'white', 
    padding:5, 
    borderRadius:13
  },
  title: {color: "#023F6C"},
  description: {color: "#303030"}
})