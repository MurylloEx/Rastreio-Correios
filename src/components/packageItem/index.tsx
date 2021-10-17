import React, { FunctionComponent, Fragment } from 'react';
import { Container } from './styles';

export type PackageItemProps = {
  trackCode?: string,
  descriptiion?: string,
  itemColor?: string
}
 
export const PackageItem: FunctionComponent<PackageItemProps> = () => {
  return (
    <Fragment>
      <Container>

      </Container>
    </Fragment>
  );
}
