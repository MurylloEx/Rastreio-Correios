import React, { Fragment, FunctionComponent, useState } from "react";
import { Container, TextInput } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons'; 

export type InputProps = {
  value?: string,
  placeholder?: string,
  iconColor?: string,
  onChangeText?: (t: string) => void
}
 
export const Input: FunctionComponent<InputProps> = ({ value, placeholder, iconColor, onChangeText }) => {
  return (
    <Fragment>
      <Container>
        <FontAwesome5 name="link" size={24} color={iconColor || "#B4B4B4"} />
        <TextInput 
          maxLength={13}
          autoCapitalize="characters"
          value={value} 
          onChangeText={onChangeText} 
          placeholder={placeholder} 
          placeholderTextColor="#B8B8B8" 
        />
      </Container>
    </Fragment>
  );
}
