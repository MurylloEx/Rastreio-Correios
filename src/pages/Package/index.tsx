import React, { Fragment } from 'react';
import { PackageItem } from '../../components';
import { Spacer } from './styles';
 
export const Package = () => {
  return (
    <Fragment>
      <Spacer />
      <PackageItem 
        itemColor="#09C047" 
        backgroundColor="#C5EAD4" 
        title="Objeto entregue ao destinatário" 
        trackCode="NX400732899BR"
      />
    </Fragment>
  )
}