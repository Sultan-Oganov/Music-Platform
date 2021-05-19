export interface IComment {
    _id: string
    username: string
    text: string
}

export interface ITrack {
    _id: string
    name: string
    artist: string
    text: string
    listens: number
    picture: string
    audio: string
    comments: IComment[]
}

export interface TrackState {
    tracks: ITrack[]
    error: string
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACK_ERROR = 'FETCH_TRACK_ERROR',
}

export interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS
    payload: ITrack[]
}

export interface FetchTrackErrorAction {
    type: TrackActionTypes.FETCH_TRACK_ERROR
    payload: string
}

export type TrackAction = FetchTrackAction | FetchTrackErrorAction