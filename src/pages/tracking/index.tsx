import React, { Fragment, useEffect} from 'react';
import Timeline from 'react-native-timeline-flatlist'
import { Spacer } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';

const data = [
  {time: '14/10/2021', title: 'Event 1', description: 'Event 1 Description'},
  {time: '14/10/2021', title: 'Event 2', description: 'Event 2 Description'},
  {time: '14/10/2021', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14/10/2021', title: 'Event 4', description: 'Event 4 Description'},
  {time: '14/10/2021', title: 'Event 5', description: 'Event 5 Description'}
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
          style={{marginLeft: 32}}
          circleColor='#FDDB00'
          lineColor='#023F6C'
          timeStyle={{textAlign: 'center', backgroundColor:'#023F6C', color:'white', padding:5, borderRadius:13}}
          titleStyle={{color: "#023F6C"}}
          descriptionStyle={{color: "#303030"}}
        />
    </Fragment>
  )
}