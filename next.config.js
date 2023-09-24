// next.config.js

module.exports = {
    // Custom build directory name
    distDir: 'build',
  
    // Security headers to prevent content from being displayed in a frame
    async headers() {
      return [
        {
          source: '/(.*)', // Apply these headers to all routes
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY', // This header prevents content from being displayed in a frame
            },
          ],
        },
      ];
    },
  };
  