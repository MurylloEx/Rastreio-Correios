import React, { Fragment, useEffect, useState} from 'react';
import Timeline from 'react-native-timeline-flatlist'
import { Spacer } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Loading, Render } from '../../components';
import { getTrackInfo } from '../../api/client';
import { Alert } from 'react-native';

export const Tracking = () => {
  const [data, setData] = useState([{date: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', hour: '08:00', icon: 'https://proxyapp.correios.com.br/public-resources/img/smile.png'}])

  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({
      title: Object(route?.params).value
    })
    
    async function getCodeInfo(){
      let response = await getTrackInfo(Object(route?.params).value);
      if (response == false){
        Alert.alert("")
      } else {
        
      }
    }
    getCodeInfo()

  }, []);

  return (
    <Fragment>
      <Render if={!isLoading}>
        <Spacer />
          <Timeline
            data={data}
            innerCircle={'icon'}
            style={{marginLeft: 12}}
            lineColor='#023F6C'
            timeStyle={{textAlign: 'center', backgroundColor:'#023F6C', color:'white', padding:5, borderRadius:13}}
            titleStyle={{color: "#023F6C"}}
            descriptionStyle={{color: "#303030"}}
          />
      </Render>

      <Render if={isLoading}>
        <Loading />
      </Render>
      
    </Fragment>
  )
}