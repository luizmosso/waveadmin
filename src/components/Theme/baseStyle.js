import styled from 'styled-components';
import {
  space,
  color,
  layout,
  background,
  border,
  position,
  margin,
  shadow,
  fontSize,
  compose,
  system,
  flex,
  height,
  width,
} from 'styled-system';

const cursor = system({ cursor: true });

const COMPOSE_BASE = [
  space,
  color,
  layout,
  background,
  border,
  position,
  shadow,
  cursor,
  margin,
  fontSize,
  flex,
  height,
  width,
];

export default (component) => styled(component)(compose(...COMPOSE_BASE));
