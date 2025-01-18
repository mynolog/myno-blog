module.exports = {
  experimental: {
    ppr: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qctxtzxpbyfftroayoaq.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
}
