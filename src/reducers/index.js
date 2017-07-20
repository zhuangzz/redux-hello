import likeReducer from "./like"
import commentRuducer from "./comment"
import {combineReducers} from "redux"

const rootReducer=combineReducers({
	comments:commentRuducer,
	likes:likeReducer
})
export default  rootReducer