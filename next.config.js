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
    API_KEY: "AIzaSyDIxA46GpSEBl2FURGMtSNOzbWb5kfrEa4",
    AUTH_DOMAIN: "github-readme-design.firebaseapp.com",
    PROJECT_ID: "github-readme-design",
    STORAGE_BUCKET: "github-readme-design.appspot.com",
    MESSAGING_SENDER_ID: "991347871391",
    APP_ID: "1:991347871391:web:6b3f44d306093834229caa",
    MEASUREMENT_ID: "G-E97G229LJT",
  },
};
