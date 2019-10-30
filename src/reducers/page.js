import { SET_PAGE } from '../actions/page'

export default function Page(state = 'pending', action) {
    switch (action.type) {
        case SET_PAGE:
            return action.page
        default:
            return state
    }
}