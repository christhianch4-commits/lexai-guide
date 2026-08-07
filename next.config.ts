import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "/[state]-legal-guide/" isn't a valid App Router folder name (a
  // dynamic segment can't share a folder with a literal suffix), so the
  // actual page lives at /state-guide/[state]/ and gets rewritten here.
  async rewrites() {
    return [
      {
        source: "/:state-legal-guide",
        destination: "/state-guide/:state",
      },
      {
        source: "/:state-legal-guide/",
        destination: "/state-guide/:state",
      },
    ];
  },
};

export default nextConfig;
