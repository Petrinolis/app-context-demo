import { createActions } from "redux-actions";

const actionTypes = ["INCREMENT", "DECREMENT"];

export default createActions(...actionTypes);
