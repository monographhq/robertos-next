import axios from "axios";
import entries from "../entries.json"

export const resolvers = {
  Query: {
    getEntries: async () => {
      try {
        return entries
      } catch (error) {
        throw error;
      }
    },
  }
};