/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// ::::: BELOW IS THE CONFIG FOR THE ENVIRONMENT VARIABLES:
module.exports = {
  env: {
    ERROR_MESSAGE: "Something went wrong please refresh the page!",
    // ERROR_MESSAGE:
    //   "Sorry! for the inconvenience we are udpating this page. It will fixed soon.....",
    GET_DATE_TIME: "http://localhost:3000/api/getDateTime",

    // Firebase Credentials
  },
};
