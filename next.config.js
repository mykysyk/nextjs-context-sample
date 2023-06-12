/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-context-sample' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-context-sample' : '',
  
}

module.exports = nextConfig
