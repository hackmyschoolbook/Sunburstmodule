import { GET_ERRORS } from "../actions/types";

const initialState = {
    errors: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    // if (action.payload) console.log(action.payload)
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}