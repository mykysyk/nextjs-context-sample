/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-context-sample' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/nextjs-context-sample' : '',
  assetPrefix: isProduction ?  '/nextjs-context-sample' : '',
  basePath: isProduction ?  '/nextjs-context-sample' : '',
  
}

module.exports = nextConfig
