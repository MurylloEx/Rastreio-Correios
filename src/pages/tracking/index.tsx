import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { Alert, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import React, { Fragment, useEffect, useState} from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/core';

import { Loading, Render } from '../../components';
import { EventData, getTrackInfo } from '../../api/client';
import { ButtonBack, ButtonLabel, Center } from './styles';
import { saveMyPackage } from '../../services/storage';

export const Tracking = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    setIsLoading(true);

    navigation.setOptions({
      title: Object(route?.params).value
    });
    
    async function getCodeInfo(){
      setData([]);
      let response = await getTrackInfo(Object(route?.params).value);

      if (isActive){
        if (response == false){
          setIsLoading(false);
          Alert.alert("Código de rastreio inválido!", "O pacote não foi encontrado em nossa base de dados de rastreio. É possível que o código ainda não esteja disponível.");
        } else {
          let events = response.objetos[0].eventos;
          setData(events.map((e: EventData) => {
            return {
              time: moment(e.dtHrCriado).format('DD/MM/YYYY'),
              description: (e.unidade.endereco.cidade || e.unidade.nome) + ':\n' + e.descricao,
              title: moment(e.dtHrCriado).format('hh:mm'),
              icon: 'https://proxyapp.correios.com.br' + e.urlIcone
            }
          }));
          if (Object(route?.params).isChecked == true){
            await saveMyPackage(response.objetos[0]);
          }
          setIsLoading(false);
        }
      }
    }

    if (isActive && isFocused)
      getCodeInfo();

    return () => {
      isActive = false;
    }
  }, [isFocused]);

  return (
    <Fragment>
      <Render if={!isLoading}>
        <Render if={data.length > 0}>
          <Timeline
            data={data}
            style={styles.timeline}
            iconDefault=""
            innerCircle="icon"
            lineColor='#023F6C'
            timeStyle={styles.time}
            titleStyle={styles.title}
            descriptionStyle={styles.description}
          />
        </Render>
        <Render if={data.length == 0}>
          <Center>
            <ButtonBack onPress={() => { navigation.navigate('Home') }}>
              <ButtonLabel>
                <Ionicons name="arrow-back-circle-outline" size={20} color="#FFF" /> Voltar
              </ButtonLabel>
            </ButtonBack>
          </Center>
        </Render>
      </Render>

      <Render if={isLoading}>
        <Loading />
      </Render>
      
    </Fragment>
  )
}

const styles = StyleSheet.create({
  timeline: { 
    paddingTop: 32,
    marginLeft: 12,
    marginRight: 12
  },
  time: { 
    textAlign: 'center', 
    backgroundColor:'#023F6C', 
    color:'white', 
    padding:5, 
    borderRadius:13
  },
  title: { color: "#023F6C" },
  description: {
    color: "#303030",
    textAlign: 'justify'
  }
})