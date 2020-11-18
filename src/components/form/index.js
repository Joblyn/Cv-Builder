import React from 'react';
import { Container, Label, Input, Button, Group, TextArea } from './styles/form';

export default function Form({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

Form.Label = function FormLabel({ children, ...restProps }){
  return <Label {...restProps}>{children}</Label>
}

Form.Input = function FormInput({ ...restProps }){
  return <Input {...restProps} />
}

Form.Button = function FormButton({ children, ...restProps }){
  return <Button {...restProps}>{children}</Button>
}

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Form.TextArea = function FormTextArea({ ...restProps }){
  return <TextArea {...restProps} />
}