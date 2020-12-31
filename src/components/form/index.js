import React from "react";
import {
  Container,
  Label,
  Input,
  Button,
  Group,
  TextArea,
  Error,
  Title,
  Text,
  Link,
  InputDropdown
} from "./styles/form";

const location = window.location.pathname;

export default function Form({ children, ...restProps }) {
  return (
    <Container {...restProps} location={location}>
      {children}
    </Container>
  );
}

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return (
    <Group {...restProps} location={location}>
      {children}
    </Group>
  );
};

Form.TextArea = function FormTextArea({ ...restProps }) {
  return <TextArea {...restProps} />;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.InputDropdown = function FormInputDropdown({ dropdownElements, ...restProps }) {
  return <InputDropdown {...restProps}>{dropdownElements}</InputDropdown>;
};
