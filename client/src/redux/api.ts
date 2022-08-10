import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';

export interface Horse {
  name: string;
  distance: number;
  dateWin: number;
}

export const horsesApi = createApi({
  reducerPath: 'horseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getHorses: build.query<Horse[], void>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const socket = io('http://localhost:3002', {});
        try {
          await cacheDataLoaded;
          socket.on('connect', () => {
            console.log('socket connected on rtk query');
            socket.emit('start');
          });

          socket.on('ticker', (round) => {
            updateCachedData((draft) => {
              const now = Date.now();
              round.forEach((horse: Horse) => {
                const prevRound = draft.find((x) => x.name === horse.name);
                if (horse.distance === 1000 && !prevRound?.dateWin) {
                  horse.dateWin = now;
                } else {
                  horse.dateWin = prevRound?.dateWin || 0;
                }
              });
              Object.assign(
                draft,
                round.sort((a: Horse, b: Horse) => b.distance - a.distance || a.dateWin - b.dateWin)
              );
              if (round.every((horse: Horse) => horse.distance === 1000)) {
                socket.close();
              }
            });
          });
        } catch {}
        await cacheEntryRemoved;
        socket.close();
      },
    }),
  }),
});

export const { useGetHorsesQuery } = horsesApi;
