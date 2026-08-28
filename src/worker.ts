export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Serve static assets from dist folder with SPA fallback
    return await env.ASSETS.fetch(request);
  },
};
