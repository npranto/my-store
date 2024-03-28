import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn, // set to `false` to bypass the edge cache
  token, // set to `true` to update content with the client
});
