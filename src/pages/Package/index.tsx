import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { Fragment, useEffect, useState } from 'react';

import { ObjectData } from '../../api/client';
import { Loading, PackageItem, Render } from '../../components';
import { fetchMyPackages } from '../../services/storage';
import { PackageList, Spacer } from './styles';
 
export const Package = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState<ObjectData[]>([]);

  useEffect(() => {
    let isActive = true;
    
    async function loadPackages(){
      let objetos = await fetchMyPackages();
      if (isActive){
        setPackages(objetos);
        setIsLoading(false);
      }
    }

    if (isActive && isFocused){
      loadPackages();
    }

    return () => {
      isActive = false;
    }

  }, [isFocused]);

  function navigateToTrackingPage(value: string){
    navigation.navigate("Tracking", {
      screen: 'Tracking',
      params: { value, isChecked: true }
    });
  }

  return (
    <Fragment>

      <Render if={!isLoading}>
        <Spacer />
        <PackageList 
          data={packages}
          keyExtractor={(item) => String(Object(item)?.codObjeto)}
          renderItem={({item}) => {
            const colors = {
              green: { color: '#09C047', background: '#C5EAD4' },
              blue: { color: '#023F6C', background: '#C3D1DC' },
              red: { color: '#EB1C00', background: '#F1C8C2' }
            }

            let data = Object(item);
            let code = data?.eventos[0]?.codigo;
            let type = data?.eventos[0]?.tipo;
            let color: any = colors.blue;

            if (['BDE', 'BDI', 'BDR'].includes(code) && (['1', '01'].includes(type)))
              color = colors.green;
            if (['BDE', 'BDI', 'BDR'].includes(code) && !(['1', '01'].includes(type)))
              color = colors.green;

            return (
              <PackageItem 
                onPress={() => navigateToTrackingPage(data.codObjeto)}
                itemColor={color?.color}
                backgroundColor={color?.background}
                title={data?.eventos[0]?.descricao || ''}
                trackCode={data?.codObjeto}
              />
            )
          }}
        />
      </Render>

      <Render if={isLoading}>
        <Loading />
      </Render>
      
    </Fragment>
  )
}