
export const logtoServerConfig = {
  endpoint: process.env.NEXT_PUBLIC_LOGTO_ENDPOINT!,
  appId: process.env.NEXT_PUBLIC_LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  baseUrl: process.env.LOGTO_BASE_URL!,
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!,
  cookieSecure: process.env.NODE_ENV === "production",
};

export const logtoClientConfig = {
  endpoint: logtoServerConfig.endpoint,
  appId: logtoServerConfig.appId,
};
