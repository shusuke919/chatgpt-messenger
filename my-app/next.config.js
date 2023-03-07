/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // nextjs13の機能を使えるようにする
  // https://zenn.dev/jtakahashi64/articles/a9d2ae3285ceb6
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['links.papareact.com'],
  }
}



