import { api } from "./api";
import type { Service } from "../types/service.type";

export const ServiceAPI = {
  // Get all services
  getAll: async (): Promise<Service[]> => {
    const res = await api.get("/services");
    return res.data;
  },

  // Get single service by ID
  getById: async (id: string): Promise<Service> => {
    const res = await api.get(`/services/${id}`);
    return res.data;
  },
};
