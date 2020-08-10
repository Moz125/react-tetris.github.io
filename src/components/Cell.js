import React from 'react';
import { StyleCell } from './styles/StyleCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
  return <StyleCell type={type} color={TETROMINOS[type].color} />;
};

export default React.memo(Cell);
