import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  basePath: '/tokens',

  // 如果需要代理设置
  async rewrites() {
    return [
      {
        source: '/dex-api/:path*',
        destination: 'http://192.168.50.237:8888/dex-api/:path*', // 代理到后端
      },
    ];
  },

};

export default nextConfig;
