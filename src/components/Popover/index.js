import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, StyledPopover, Item } from './styles';

function Popover({ onSelect, disabled, items, ...props }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  const select = (id) => {
    if (!open) {
      setOpen(true);
      return;
    }

    if (selected !== id) {
      setSelected(id);
      onSelect(id);
    }
    setOpen(false);
  };

  const orderedItems = () => {
    if (items?.length <= 0) return [];

    const unselected = items.filter(({ id }) => selected !== id);
    let selectedOne = items.find(({ id }) => selected === id);
    if (!selectedOne) {
      selectedOne = unselected[0];
      setSelected(selectedOne.id);
    }
    const sequence = [selectedOne, ...unselected];

    return open ? (
      sequence.map(({ id, text }) => (
        <Item key={id} onClick={() => select(id)}>
          {text}
        </Item>
      ))
    ) : (
      <Item key={selectedOne.id} onClick={() => select(selectedOne.id)}>
        {selectedOne.text}
      </Item>
    );
  };

  return (
    <Container {...props}>
      <StyledPopover disabled={disabled} open={open}>
        {orderedItems()}
      </StyledPopover>
    </Container>
  );
}

Popover.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
};

Popover.defaultProps = {
  label: null,
  items: null,
  onSelect: () => {},
  disabled: false,
};

export default Popover;
