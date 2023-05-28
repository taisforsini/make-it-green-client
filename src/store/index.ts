import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { ProductStoreType } from "./slices/productStore/type";
import { UserStoreType } from "./slices/userStore/type";
import rootReducer from "./slices/rootReducer";
import storage from "redux-persist/lib/storage";

export interface StoreState {
  productStore: ProductStoreType;
  userStore: UserStoreType;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productStore", "userStore"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
