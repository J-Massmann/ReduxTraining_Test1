import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const burgerRestaurantsApi = createApi({
  reducerPath: 'burgerRestaurant',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openbrewerydb.org/breweries',
  }),
  endpoints: builder => ({
    getBurgerRestaurantsByNumberOfRestaurants: builder.query({
      query: numberOfRestaurantsLoaded =>
        `?per_page=${numberOfRestaurantsLoaded}`,
    }),
  }),
});

export const { useGetBurgerRestaurantsByNumberOfRestaurantsQuery } =
  burgerRestaurantsApi;
