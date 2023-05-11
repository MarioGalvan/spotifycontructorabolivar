type AppHttpProps = {
  url: string;
  method: string;
  body?: any;
  headers?: any;
  params?: any;
};
export const APP_HTTP = (props: AppHttpProps) => {
  const { url, method, body, headers, params } = props;
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    params: params ? JSON.stringify(params) : undefined,
  };
  return fetch(url, options);
};
