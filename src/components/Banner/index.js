import React from 'react';
import PropTypes from 'prop-types';
import { StyledBanner, Content } from './styles';
import { CheckIcon, CloseIcon, BlockedIcon } from '../Icons';
import { colors } from '../Theme';
const { success: successColor, error: errorColor } = colors;

function Banner({ children, success, error, onDismiss, ...props }) {
  return (
    <StyledBanner {...props} error={error} success={success}>
      {success && <CheckIcon color={successColor} />}
      {error && <BlockedIcon color={errorColor} />}
      <Content>{children}</Content>
      <CloseIcon pointer onClick={onDismiss} />
    </StyledBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  success: PropTypes.bool,
  error: PropTypes.bool,
  onDismiss: PropTypes.func,
};

Banner.defaultProps = {
  children: null,
  success: false,
  error: false,
  onDismiss: () => {},
};

export default Banner;
