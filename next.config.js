/** @type {import('next').NextConfig} */
import { initGT } from 'gt-next/config'

const nextConfig = {
  experimental: {
    appDir: true,
  }
}

const withGT = initGT({
    defaultLocale: "en-US",
    locales: ["en-US", "fr", "es", "de", "ja", "zh"]
});

// Combine the configs and use export default instead of module.exports
export default withGT(nextConfig);
