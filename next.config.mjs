/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["localhost",'strapi.realiostage.network','strapi.realio.network'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains', // Enforce HTTPS for a year with subdomains
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src-elem 'self' https://*.zdassets.com https://www.googletagmanager.com https://*.google-analytics.com 'unsafe-inline'; script-src 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' https://strapi.realiostage.network https://strapi.realio.network data:; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:; connect-src 'self' https://*.google-analytics.com https://strapi.realiostage.network https://strapi.realio.network https://ekr.zdassets.com https://realionetwork.zendesk.com;", 
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevents the site from being framed
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME-type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade', // Sends referrer information for HTTPS links, none for HTTP links
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()', // Disable these features for added security
          },
        ],
      },
    ]
  },
};

export default nextConfig;
