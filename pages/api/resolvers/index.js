import entries from "../entries.json"

export const resolvers = {
  Query: {
    entries: async () => {
      try {
        return entries
      } catch (error) {
        throw error;
      }
    },
  }
};