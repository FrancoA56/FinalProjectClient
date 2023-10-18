import jsonServerProvider from "ra-data-json-server";
const URL = "http://localhost:3001/api"

export const dataProvider = jsonServerProvider(
  URL
);
