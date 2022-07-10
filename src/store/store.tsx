import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryFetchApi } from './apis/RTKQuery'
import authSlice from './slices/auth/authSlice'
import counterSlice from './slices/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    [rtkQueryFetchApi.reducerPath]: rtkQueryFetchApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    rtkQueryFetchApi.middleware
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch