import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/app";

const store = configureStore({
    // 合并多个Slice
    reducer: {
        app: appSlice
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
