import React from 'react';

import { Form } from '../components';

export default function PersonalInfo({ children, ...restProps }) {
  return <Form.Base {...restProps}>{children}</Form.Base>
} 