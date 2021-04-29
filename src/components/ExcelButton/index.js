import React from 'react';
import PropTypes from 'prop-types';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { StyledExcelButton } from './styles';

function ExcelButton({ id, table, filename, sheet, buttonText, ...props }) {
  const buttonProps = {
    id,
    table,
    filename,
    sheet,
    buttonText,
    className: 'excel-button',
  };
  return (
    <StyledExcelButton {...props}>
      <ReactHTMLTableToExcel {...buttonProps} />
    </StyledExcelButton>
  );
}

export default ExcelButton;

ExcelButton.propTypes = {
  id: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  sheet: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
