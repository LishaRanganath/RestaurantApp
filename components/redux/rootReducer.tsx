import { combineReducers } from 'redux';
import { reducer } from './reducer'; // Import your individual reducers

// Combine all reducers
const rootReducer = combineReducers({
  reducer, // Add all your reducers here
});

// Create the RootState type
export type RootState = ReturnType<typeof rootReducer>; // Inferred from rootReducer

export default rootReducer; // Export the combined reducer
