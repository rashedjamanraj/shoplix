
import { configureStore } from '@reduxjs/toolkit';
import shoplixReducer from './shoplixSlice';
import { persistStore, persistReducer, WebStorage } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { version } from 'os';

export function createPersistStore():WebStorage{
  const isServer = typeof window === "undefined";

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      }
    };
  }
  return createWebStorage("local")
}

const storage = typeof window !== 'undefined'?createWebStorage("local"):createPersistStore();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, shoplixReducer)


export const store = configureStore({
  reducer: {
    shoplix: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
        ],
      },
    }),
  
});

export let persistor = persistStore(store);

    