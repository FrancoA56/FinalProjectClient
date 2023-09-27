import {
  ADD_MODEL,
  REMOVE_MODEL,
  REMOVE_MODEL_DISABLE,
  ORDER_MODELS_NAME,
  ORDER_MODELS_OWNED,
  ORDER_MODELS_PRICE,
  ORDER_MODELS_RATING,
  ORDER_MODELS_RELEASED,
  FILTER_MODELS_BY_COLORS,
  FILTER_MODELS_BY_TYPES,
} from "./types";

const initialState = {
  models: [],
  allModels: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    default:
      return { ...state };
  }
};

export default rootReducer;
