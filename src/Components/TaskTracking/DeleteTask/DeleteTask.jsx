import React from "react";
import ButtonDelete from "../../../Utils/TaskTrackingUtils/ButtonDelete/ButtonDelete";

const DeleteTask = ({ onDelete }) => {
  return <ButtonDelete onClick={onDelete} />;
};
export default DeleteTask;
