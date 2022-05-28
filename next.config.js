/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// ::::: BELOW IS THE CONFIG FOR THE ENVIRONMENT VARIABLES:
module.exports = {
  env: {
    APP_NAME: process.env.APP_NAME,
    ERROR_MESSAGE: process.env.ERROR_MESSAGE,
    // ERROR_MESSAGE:
    //   "Sorry! for the inconvenience we are udpating this page. It will fixed soon.....",
    GET_DATE_TIME: process.env.GET_DATE_TIME,
    AUTH_TOKEN: process.env.AUTH_TOKEN,

    // Firebase Credentials
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};
