import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

import { StyledButtonEdit } from './styled';

const ButtonEdit = ({onClick}) => {
  return (
    <StyledButtonEdit aria-label="edit"
     onClick={onClick}
     sx={{ color: 'white' }}>
      <EditIcon />
    </StyledButtonEdit>
  );
};

export default ButtonEdit;
