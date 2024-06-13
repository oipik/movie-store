import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResponseMovies } from '../../models/models-Movies';
import { IResponseMovie } from '../../models/models-Movie';

const API_KEY = '9KAR067-Q14MT1Q-K8BN9QR-B80H7FW';

export const moviesApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.kinopoisk.dev/v1.4`
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<IResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=movie`,
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': API_KEY }
      }),
      transformResponse: (response: IResponseMovies): IResponseMovies => ({
        docs: response.docs,
        limit: response.limit,
        page: response.page,
        pages: response.pages,
        total: response.total
      }),
    }),
    getSeries: builder.query<IResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=8-10&type=tv-series`,
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': API_KEY }
      }),
      transformResponse: (response: IResponseMovies): IResponseMovies => ({
        docs: response.docs,
        limit: response.limit,
        page: response.page,
        pages: response.pages,
        total: response.total
      }),
    }),
    getCartoons: builder.query<IResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=cartoon`,
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': API_KEY }
      }),
      transformResponse: (response: IResponseMovies): IResponseMovies => ({
        docs: response.docs,
        limit: response.limit,
        page: response.page,
        pages: response.pages,
        total: response.total
      }),
    }),
    getMovie: builder.query<IResponseMovie, string>({
      query: (id: string) => ({
        url: `movie/${id}`,
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': API_KEY }
      }),
    }),
  }),
})

export const { useGetMoviesQuery, useGetSeriesQuery, useGetMovieQuery, useGetCartoonsQuery } = moviesApi;
