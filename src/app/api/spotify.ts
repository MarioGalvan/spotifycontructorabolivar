import { GLOBAL_CONSTANTS } from "../commons/constanst/global_constanst.constans";

export const SpotifyHandleLogin = () => {
  const redirect_uri = "http://localhost:3000/";
  const scopes = "user-read-private user-read-email";
  const url = "https://accounts.spotify.com/authorize";
  window.location.href = `${url}?client_id=${GLOBAL_CONSTANTS.SPOTIFY_CREDENTIALS.CLIENT_ID}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;
};
