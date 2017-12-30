export interface VideoOptionsModel {
    playinline?: string;
    controls?: string;
    autoplay?: string;
    buffered?: string;
    loop?: string;
    muted?: string;
    preload?: string;
    poster?: string;
}

export const DefaultVideoOptions : VideoOptionsModel = {
    playinline: '',
    controls: null,
    autoplay: null,
    buffered: null,
    loop: null,
    muted: null,
    preload: null,
    poster: null
};