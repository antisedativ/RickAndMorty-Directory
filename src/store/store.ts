import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {charactersApi} from "./api/charcters";

export const store = configureStore( {
    reducer: {
        [charactersApi.reducerPath]: charactersApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(charactersApi.middleware)
})

setupListeners(store.dispatch)
