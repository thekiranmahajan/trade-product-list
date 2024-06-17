export const FAKE_PRODUCT_API = "https://fakestoreapi.com/products";

export const FEATURED_USERS_API =
  "https://prod.imkloud.com/api/user-groups/v2/retrieve/featured/5G46npPukBgjkHEWw";

export const USERS_GROUPS_API =
  "https://prod.imkloud.com/api/user-groups/v2/retrieve/5G46npPukBgjkHEWw";

export const API_OPTIONS = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    auth: {
      apiKey: "3AxFH2MfurQYFS8LRFCHpdHFHrjKhp",
      orgId: "YshrFJcsDP8PT6cjr",
      type: "apiKey",
    },
    pagination: {
      limit: 10,
      skip: 0,
    },
  }),
};
