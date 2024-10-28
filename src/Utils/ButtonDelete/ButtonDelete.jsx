import * as React from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledButtonDelete } from "./styled";

export default function ButtonDelete({ onClick }) {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <StyledButtonDelete
        aria-label="delete"
        size="small"
        onClick={onClick}
        sx={{ color: "white" }}
      >
        <DeleteIcon fontSize="inherit" />
      </StyledButtonDelete>
    </Stack>
  );
}
