import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
  const withVanillaExtract = createVanillaExtractPlugin();
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
        },
      ],
    },
  };
  
  export default withVanillaExtract(nextConfig);