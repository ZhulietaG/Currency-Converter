const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "f40752463734164ee849d7ff";
export const endPointPath = (from : string):string =>
    `${API_DOMAIN}/${API_KEY}/latest/${from}`;
