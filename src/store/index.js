import { configureStore } from '@reduxjs/toolkit'
import mood from './slices/mood.slice'

export default configureStore({
  reducer: {
    mood
	}
})