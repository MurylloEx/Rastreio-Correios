import React, { Fragment, FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { Container, Label } from "./styles";

export type ButtonProps = {
  onPress: (e: GestureResponderEvent) => void,
  label: string
}

export const Button: FunctionComponent<ButtonProps> = ({onPress, label}) => {
  return (
    <Fragment>
      <Container activeOpacity={0.7} onPress={onPress}>
        <Label>{label}</Label>
      </Container>
    </Fragment>
  );
}
