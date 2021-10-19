import React, { Fragment, useEffect} from 'react';
import Timeline from 'react-native-timeline-flatlist'
import { Spacer } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';

const data = [
  {time: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', description: '08:00'},
  {time: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', description: '08:00'},
  {time: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', description: '08:00'},
  {time: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', description: '08:00'},
  {time: '14/10/2021', title: 'CURITIBA - Objeto recebido pelos Correios do Brasil', description: '08:00'}
]

export const Tracking = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({
      title: Object(route?.params).value
    })
  }, []);

  return (
    <Fragment>
      <Spacer />
        <Timeline
          data={data}
          style={{marginLeft: 12}}
          circleColor='#FDDB00'
          lineColor='#023F6C'
          timeStyle={{textAlign: 'center', backgroundColor:'#023F6C', color:'white', padding:5, borderRadius:13}}
          titleStyle={{color: "#023F6C"}}
          descriptionStyle={{color: "#303030"}}
        />
    </Fragment>
  )
}