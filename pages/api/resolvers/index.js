import { GraphQLError } from "graphql";
import entries from "../entries.json";

export const resolvers = {
  Query: {
    entries: async () => {
      if (Math.random() < 0.4) {
        return new GraphQLError("API is down");
      }

      return entries;
    },
    vendorStats: async () => {
      try {
        // @todo: Implement logic to calculate vendor stats
        return [
          {
            name: "Vendor name",
            averageQuality: 3.5,
            contactMethod: "Snail mail",
          },
        ];
      } catch (error) {
        throw error;
      }
    },
  },
};
