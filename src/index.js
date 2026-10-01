export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "personal-ai-workspace-e2e-test" });
    }
    return new Response("Personal AI Workspace E2E Worker");
  }
};
