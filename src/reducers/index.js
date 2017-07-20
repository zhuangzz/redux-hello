import postReducer from "./post"
import commentRuducer from "./comment"
import {combineReducers} from "redux"

const rootReducer=combineReducers({
	comments:commentRuducer,
	posts:postReducer
})
export default  rootReducer