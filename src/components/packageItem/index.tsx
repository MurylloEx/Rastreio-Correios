import React, { FunctionComponent, Fragment } from 'react';
import { CodeRow, Container, InfoRow, Title, TrackCode } from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

export type PackageItemProps = {
  trackCode?: string,
  title?: string,
  backgroundColor?: string,
  itemColor?: string
}
 
export const PackageItem: FunctionComponent<PackageItemProps> = (props: PackageItemProps) => {
  const color = !!props.itemColor ? props.itemColor : '#023F6C';
  const backgroundColor = !!props.backgroundColor ? props.backgroundColor : '#C3D1DC';
  return (
    <Fragment>
      <Container activeOpacity={0.7} color={color} backgroundColor={backgroundColor}>
        <InfoRow>
          <FontAwesome5 name="truck" size={20} color={color} />
          <Title numberOfLines={1} color={color}>{props.title}</Title>
        </InfoRow>
        <CodeRow>
          <TrackCode>
            {props.trackCode}
          </TrackCode>
        </CodeRow>
      </Container>
    </Fragment>
  );
}
