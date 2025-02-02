// import { createStore,applyMiddleware } from "redux";
// import { movieReducer } from "../reducers/movieReducer";
// import { thunk } from "redux-thunk";

// export const movieStore=createStore(movieReducer,applyMiddleware(thunk))
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {movieReducer} from '../reducers/movieReducer';  // تأكد من استيراده بشكل صحيح
import {thunk} from 'redux-thunk';  // التأكد من استيراد thunk بشكل صحيح

// إذا كان لديك أكثر من reducer يمكنك استخدام combineReducers هنا
const rootReducer = combineReducers({
  allMovies: movieReducer,  // في حال كان لديك reducers أخرى
});

// إذا كنت تستخدم reducer واحد فقط، يمكنك ببساطة استخدامه كالتالي:
export const movieStore = createStore(
  rootReducer,  // استخدم rootReducer هنا
  applyMiddleware(thunk)  // استخدام thunk كميدل وير
);
