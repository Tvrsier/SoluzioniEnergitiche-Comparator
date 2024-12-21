export const buildApiUrl = (relativePath) => {
    var base = window.location.origin
    const apiPort = process.env.REACT_APP_PORT
    if(process.env.NODE_ENV === 'development') {
        base = base.replace(/:\d+/, ':'+apiPort);
    }
    const apiPath = process.env.REACT_APP_API_BASE_PATH;
    return `${base}${apiPath}${relativePath}`;
}