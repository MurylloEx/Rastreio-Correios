import React, { Fragment, FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { Container, Label } from "./styles";

export type ButtonProps = {
  onPress: (e: GestureResponderEvent) => void,
  title: string
}

export const Button: FunctionComponent<ButtonProps> = ({onPress, title}) => {
  return (
    <Fragment>
      <Container activeOpacity={0.7} onPress={onPress}>
        <Label>{title}</Label>
      </Container>
    </Fragment>
  );
}
