export const buildApiUrl = (relativePath) => {
    const baseUrl = window.location.origin;
    const apiPath = import.meta.env.VITE_API_PATH;
    return `${baseUrl}${apiPath}${relativePath}`
}