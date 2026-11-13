const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "/nipuna-portfolio"
        : "";

export function assetPath(path: string) {
    return `${BASE_PATH}${path}`;
}