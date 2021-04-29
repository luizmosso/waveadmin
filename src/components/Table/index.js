import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledTable, StyledRow, StyledColumn } from './styles';

export const Table = ({ header, children, isMobile, ...props }) => {
  return (
    <Container>
      <StyledTable {...props}>
        {!isMobile && (
          <thead>
            <TableRow header>
              {header?.map((col, key) => (
                <TableColumn key={key}>{col}</TableColumn>
              ))}
            </TableRow>
          </thead>
        )}
        <tbody>{children}</tbody>
      </StyledTable>
    </Container>
  );
};

export const TableRow = (props) => {
  return <StyledRow {...props} />;
};

export const TableColumn = (props) => {
  return <StyledColumn {...props} />;
};

Table.propTypes = {
  children: PropTypes.any,
  header: PropTypes.arrayOf(PropTypes.string),
  isMobile: PropTypes.bool,
};
