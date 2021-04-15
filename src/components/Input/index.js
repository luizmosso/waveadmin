import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VisibilityIcon, VisibilityOffIcon } from '../Icons';
import { Container, StyledInput, Label, Error } from './styles';

function Input({
  label,
  value,
  onChange,
  placeholder,
  type,
  password,
  disabled,
  error,
  ...props
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const getPasswordIcon = () => {
    const iconProps = {
      position: 'absolute',
      right: '0.8rem',
      top: '1.6rem',
      pointer: true,
    };
    return passwordVisible ? (
      <VisibilityIcon
        onClick={() => setPasswordVisible(false)}
        {...iconProps}
      />
    ) : (
      <VisibilityOffIcon
        onClick={() => setPasswordVisible(true)}
        {...iconProps}
      />
    );
  };

  const getInputType = () => {
    if (password) return passwordVisible ? 'text' : 'password';
    if (type) return type;
    return 'text';
  };

  return (
    <Container {...props}>
      {label && <Label>{label}</Label>}
      <StyledInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={getInputType()}
        disabled={disabled}
      />
      {error && <Error>{error}</Error>}
      {password && getPasswordIcon()}
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  password: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  value: '',
  onChange: () => {},
  placeholder: null,
  type: 'text',
  password: false,
  disabled: false,
  error: null,
};

export default Input;
