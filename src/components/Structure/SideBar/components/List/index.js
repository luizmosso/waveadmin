import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledList,
  ListTitle,
  StyledListItem,
  StyledLink,
  ListItemText,
} from './styles';
import { colors } from '../../../../Theme';

export const List = ({ title, children, noTitle }) => (
  <StyledList>
    {!noTitle && <ListTitle>{title}</ListTitle>}
    {children}
  </StyledList>
);

export const ListItem = ({ Icon, description, path, onlyIcons }) => (
  <StyledListItem onlyIcons={onlyIcons}>
    <StyledLink to={path}>
      {Icon && <Icon width={20} color={colors.light} mr={12} />}
      {!onlyIcons && <ListItemText>{description}</ListItemText>}
    </StyledLink>
  </StyledListItem>
);

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
  noTitle: PropTypes.bool,
};

List.defaultProps = {
  title: '',
  noTitle: false,
};

ListItem.propTypes = {
  Icon: PropTypes.any,
  description: PropTypes.string,
  path: PropTypes.string,
  onlyIcons: PropTypes.bool,
};

ListItem.defaultProps = {
  icon: null,
  description: '',
  path: '#',
  onlyIcons: false,
};
