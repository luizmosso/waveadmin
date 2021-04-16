import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable, StyledRow, StyledColumn } from './styles';

export const Table = ({ header, children, isMobile, ...props }) => {
  return (
    <StyledTable {...props}>
      {!isMobile && (
        <Row header>
          {header?.map((col, key) => (
            <Column key={key}>{col}</Column>
          ))}
        </Row>
      )}
      {children}
    </StyledTable>
  );
};

export const Row = (props) => {
  return <StyledRow {...props} />;
};

export const Column = (props) => {
  return <StyledColumn {...props} />;
};

Table.propTypes = {
  children: PropTypes.any,
  header: PropTypes.arrayOf(PropTypes.string),
  isMobile: PropTypes.bool,
};
