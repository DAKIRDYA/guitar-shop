import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api.ts';
import { rootReducers } from './slices/rootRedusers.ts';




export const api = createAPI();

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;


export function setupStore(preloadedState?:Partial<RootState>) {
  return configureStore({
    middleware:(getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument:api,
        },
          serializableCheck: false
      }),
    reducer:rootReducers,
    preloadedState,
  }

  );
}
export const store = setupStore();
