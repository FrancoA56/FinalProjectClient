import {
  ADD_MODEL,
  ADD_MODELS,
  ADD_ALL_MODEL_CART,
  ADD_MODEL_CART,
  REMOVE_MODEL_DISABLE,
  REMOVE_MODEL_CART,
  ORDER_MODELS_NAME_ASCENDANT,
  ORDER_MODELS_NAME_DESCENDANT,
  ORDER_MODELS_OWNED,
  ORDER_MODELS_PRICE_ASCENDANT,
  ORDER_MODELS_PRICE_DESCENDANT,
  ORDER_MODELS_RATING,
  ORDER_MODELS_RELEASED,
  FILTER_MODELS_BY_COLORS,
  FILTER_MODELS_BY_TYPES,
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_PRESETS,
  EDIT_USER,
  WITH_DEPLOYMENT,
  LOGIN_TRUE,
  DEPLOYMENT_COST,
  ADD_COLOR,
  SET_PAGE
} from "./types";

const initialState = {
  models: [],
  allModels: [],
  cart: [],
  user: [],
  presets: 1,
  deployment: false,
  deploymentCost: 0,
  login: false,
  colores: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MODEL:
      return {
        ...state,
        models: [...state.models, ...payload],
      };

    case ADD_COLOR:
      console.log("payloda--->", payload);
      return {
        ...state,
        colores: payload,
      };

    case ADD_MODELS:
      return {
        ...state,
        models: [...state.models, ...payload],
        allModels: [...state.allModels, ...payload],
      };

    case ADD_MODEL_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case ADD_ALL_MODEL_CART:
      return {
        ...state,
        cart: payload,
      };

    case REMOVE_MODEL_CART:
      return {
        ...state,
        cart: payload,
      };

    case REMOVE_MODEL_DISABLE:
      return {
        ...state,
        models: state.models.filter((model) => model.id !== payload),
        allModels: state.allModels.filter((model) => model.id !== payload),
      };

    case ORDER_MODELS_NAME_ASCENDANT:
      const sortedByNameAscendant = state.models
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        models: sortedByNameAscendant,
      };

    case ORDER_MODELS_NAME_DESCENDANT:
      const sortedByNameDescendant = state.models
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        models: sortedByNameDescendant,
      };

    case ORDER_MODELS_OWNED:
      const sortedBySales = state.models
        .slice()
        .sort((a, b) => b.owned - a.owned);
      return {
        ...state,
        models: sortedBySales,
      };

    case ORDER_MODELS_PRICE_ASCENDANT:
      const sortedByPriceAscendant = state.models
        .slice()
        .sort((a, b) => b.price - a.price);
      return {
        ...state,
        models: sortedByPriceAscendant,
      };

    case ORDER_MODELS_PRICE_DESCENDANT:
      const sortedByPriceDescendant = state.models
        .slice()
        .sort((a, b) => a.price - b.price);
      return {
        ...state,
        models: sortedByPriceDescendant,
      };

    case ORDER_MODELS_RATING:
      const sortedByRating = state.models
        .slice()
        .sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        models: sortedByRating,
      };

    case ORDER_MODELS_RELEASED:
      const sortedByReleased = state.models
        .slice()
        .sort((a, b) => new Date(b.released) - new Date(a.released));
      return {
        ...state,
        models: sortedByReleased,
      };

    case FILTER_MODELS_BY_COLORS:
      const filterByColors = state.models.filter((model) => {
        return model?.colors?.includes(payload);
      });
      return {
        ...state,
        models: filterByColors,
      };

    case FILTER_MODELS_BY_TYPES:
      const filterByType = state.models.filter((model) => {
        return model?.type?.includes(payload);
      });
      return {
        ...state,
        models: filterByType,
      };

    case LOGIN_USER:
      return {
        ...state,
        user: payload,
      };

    case LOGIN_TRUE:
      return {
        ...state,
        login: payload,
      };
    ////////////////////////////////////////////
    // le paso al estado global la nueva data q traigo del axios.put
    case EDIT_USER:
      return {
        ...state,
        user: payload,
      };
    ////////////////////////////////////////////

    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        login: false,
      };

    case CREATE_PRESETS:
      return {
        ...state,
        presets: 0,
      };

    case WITH_DEPLOYMENT:
      return {
        ...state,
        deployment: payload,
      };

    case DEPLOYMENT_COST:
      return {
        ...state,
        deploymentCost: payload,
      };
    
    case SET_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
