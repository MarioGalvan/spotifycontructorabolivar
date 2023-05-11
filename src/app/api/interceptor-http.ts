import { GLOBAL_CONSTANTS } from "../commons/constanst/global_constanst.constans";

type AppHttpProps = {
  url: string;
  method: string;
  body?: any;
  headers?: any;
  params?: any;
};

export const GetBearerToken = async () => {
  const client_id = GLOBAL_CONSTANTS.SPOTIFY_CREDENTIALS.CLIENT_ID;
  const client_secret = GLOBAL_CONSTANTS.SPOTIFY_CREDENTIALS.CLIENT_SECRET;
  const url = "https://accounts.spotify.com/api/token";
  const body = "grant_type=client_credentials";
  const headers = {
    Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const options: any = {
    method: "POST",
    headers,
    body,
  };
  let data = await fetch(url, options);
  let response = await data.json();
  return response;
};

export const APP_HTTP_SPOTIFY = async (props: AppHttpProps) => {
  const { url, method, body, headers, params } = props;
  const baseUrl = "https://api.spotify.com/v1/" + url;
  console.log(baseUrl);
  const dataBearer = await GetBearerToken();
  let accessToken = dataBearer.access_token;
  console.log(accessToken);
  const options: any = {
    method,
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  let data = await fetch(baseUrl, options);
  let response = await data.json();
  return response;
};
