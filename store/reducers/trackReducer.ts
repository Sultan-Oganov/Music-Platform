import { TrackState, TrackAction, TrackActionTypes } from './../../types/track';

const initialState: TrackState = {
    tracks: [],
    error: ''
}

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACK_ERROR:
            return { ...state, error: action.payload }
        case TrackActionTypes.FETCH_TRACKS:
            return { error: '', tracks: action.payload }
        default:
            return state
    }

}