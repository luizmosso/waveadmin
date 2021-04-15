import React from 'react';
import { Container, Input } from './styles';
import { SearchIcon } from '../../../../Icons';

function SearchBar() {
  return (
    <Container>
      <Input placeholder="Pesquisar..." />
      <SearchIcon width={20} color="#9aa8af" mr={12} />
    </Container>
  );
}

export default SearchBar;
