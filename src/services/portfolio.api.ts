import { api } from "./api";
import type { Portfolio } from "../types/portfolio.type";

export const PortfolioAPI = {
  // Get all portfolio items
  getAll: async (): Promise<Portfolio[]> => {
    const res = await api.get("/portfolio");
    return res.data;
  },

  // Get single portfolio item
  getById: async (id: string): Promise<Portfolio> => {
    const res = await api.get(`/portfolio/${id}`);
    return res.data;
  },
};
