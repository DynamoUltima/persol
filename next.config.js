/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        remotePatterns: [{ hostname: "images.unsplash.com" }],
        domains: ['i.ytimg.com','yt3.ggpht.com','www.youtube.com','images.unsplash.com']
      }
}

module.exports = nextConfig
