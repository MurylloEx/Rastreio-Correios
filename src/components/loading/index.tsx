import React, { Fragment, FunctionComponent } from 'react';
import { Center, Spinner } from './styles';

export interface LoadingProps { }
 
export const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <Fragment>
      <Center>
        <Spinner size="large" color="#003467"/>
      </Center>
    </Fragment>
  );
}