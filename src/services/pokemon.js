import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoint: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,

    }),
    
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
