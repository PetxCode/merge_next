import { Application } from "express";
import product from "./router/storeRouter";
export const mainApp = async (app: Application) => {
  try {
    app.use("/api", product);
  } catch (error) {
    console.error(error);
  }
};
