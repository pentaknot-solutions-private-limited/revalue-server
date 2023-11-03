// module.exports = [
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "https://revaluedesigns.s3.us-east-2.amazonaws.com", // change here
//           ],
//           "media-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "https://revaluedesigns.s3.us-east-2.amazonaws.com", // change here
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];

// ~/strapi-aws-s3/backend/config/middlewares.js

module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://revaluedesigns.s3.us-east-2.amazonaws.com", // change here
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://revaluedesigns.s3.us-east-2.amazonaws.com", // change here
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
