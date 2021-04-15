import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledLink } from './styles';
import WaveIcon from '../Icons/WaveIcon';

function Logo({ onlyIcon, linkTo, ...props }) {
  const Icon = () => <WaveIcon width={30} transform="rotate(-50deg)" />;

  return (
    <Container {...props} onlyIcon={onlyIcon}>
      <StyledLink to={linkTo}>
        {!onlyIcon && 'Wav'}
        <Icon />
      </StyledLink>
    </Container>
  );
}

Logo.propTypes = {
  onlyIcon: PropTypes.bool,
  linkTo: PropTypes.string,
};

Logo.defaultProps = {
  onlyIcon: false,
  linkTo: '#',
};

export default Logo;
