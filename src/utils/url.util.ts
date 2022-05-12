export const join = (base: string, path: string): string => {
    return decodeURI(new URL(path, base).toString());
}

export const format = (url: string, options: any): string => {
    for (const key of Object.keys(options.params)) {
        url = url.replace(`{${key}}`, options.params[key]);
    }

    let queryString = '?';

    for(const key of Object.keys(options.query)) {
        queryString += `${key}=${options.query[key]}&`;
    }

    return url + queryString;
}
