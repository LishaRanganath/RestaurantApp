import { combineReducers } from 'redux';
import { reducer } from './reducer'; // Import your individual reducers
import { userReducer } from './userReducer';

// Combine all reducers
const rootReducer = combineReducers({
  reducer,
  userReducer // Add all your reducers here
});

// Create the RootState type
export type RootState = ReturnType<typeof rootReducer>; // Inferred from rootReducer

export default rootReducer; // Export the combined reducer
