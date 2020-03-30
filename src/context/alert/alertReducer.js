import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
  [HIDE_ALERT]: state => ({...state, visible: false}),
  DEFAULT: state => state
};

export const AlertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT; // создается handle по ключу action.type

  return handle(state, action);
};
