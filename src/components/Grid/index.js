import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledRow, StyledColumn } from './styles';

export const Grid = ({ header, children, isMobile, ...props }) => {
  return (
    <StyledGrid {...props}>
      {!isMobile && (
        <GridRow header>
          {header?.map((col, key) => (
            <GridColumn key={key}>{col}</GridColumn>
          ))}
        </GridRow>
      )}
      {children}
    </StyledGrid>
  );
};

export const GridRow = (props) => {
  return <StyledRow {...props} />;
};

export const GridColumn = (props) => {
  return <StyledColumn {...props} />;
};

Grid.propTypes = {
  children: PropTypes.any,
  header: PropTypes.arrayOf(PropTypes.string),
  isMobile: PropTypes.bool,
};
