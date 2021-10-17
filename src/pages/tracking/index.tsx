import React, { Fragment, useEffect} from 'react';
import { Text } from 'react-native';
import { Logo, Input, Button } from '../../components';
import Timeline from 'react-native-timeline-flatlist'
import { useNavigation, useRoute } from '@react-navigation/core';

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
      <Text>Testando</Text>
    </Fragment>
  )
}