import moment from 'moment';
import Timeline from 'react-native-timeline-flatlist';
import React, { Fragment, useEffect, useState} from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Loading, Render } from '../../components';
import { EventData, getTrackInfo } from '../../api/client';
import { useNavigation, useRoute } from '@react-navigation/core';

export const Tracking = () => {
  const [data, setData] = useState([{
    time: '',
    description: '',
    title: '',
    icon: ''
  }]);

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
          let events = response.objetos[0].eventos;
          setData(events.map((e: EventData) => {
            return {
              time: moment(e.dtHrCriado).format('DD/MM/YYYY'),
              description: (e.unidade.endereco.cidade || e.unidade.nome) + ' - ' + e.descricao,
              title: moment(e.dtHrCriado).format('hh:mm'),
              icon: 'https://proxyapp.correios.com.br' + e.urlIcone
            }
          }));
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
        <Timeline
          data={data}
          style={styles.timeline}
          innerCircle={"icon"}
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