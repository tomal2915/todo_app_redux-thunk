import {
  LOADED,
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
