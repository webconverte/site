/**
 * Welcome to Cloudflare Workers!
 *
 * - Run `npm run dev` in this directory to start a local development server
 * - Run `npm run deploy` to publish your worker to the Cloudflare network
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  // Define bindings here (e.g. KVNamespace, D1Database, R2Bucket, etc.)
  // Example:
  // MY_KV_NAMESPACE: KVNamespace;
}

// CORS Headers to allow safe requests from your Next.js application
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Replace with your production domain (e.g., https://webconverte.site) in production
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS Preflight OPTIONS Request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    // Main router
    switch (url.pathname) {
      case "/":
        return new Response(
          JSON.stringify({
            status: "success",
            message: "WebConverte API is active!",
            version: "1.0.0",
            timestamp: new Date().toISOString(),
          }),
          {
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );

      case "/api/lead":
        // Example endpoint to capture a lead from the landing page
        if (request.method !== "POST") {
          return new Response(
            JSON.stringify({ error: "Method not allowed. Use POST." }),
            {
              status: 405,
              headers: {
                "Content-Type": "application/json",
                ...corsHeaders,
              },
            }
          );
        }

        try {
          const body = await request.json() as any;
          const { name, email, phone, specialty } = body;

          if (!name || !email) {
            return new Response(
              JSON.stringify({ error: "Name and email are required fields." }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json",
                  ...corsHeaders,
                },
              }
            );
          }

          // TODO: Save lead to a D1 Database, KV, or dispatch email/webhook here

          return new Response(
            JSON.stringify({
              status: "success",
              message: "Lead captured successfully!",
              data: { name, email, phone, specialty },
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
                ...corsHeaders,
              },
            }
          );
        } catch (error: any) {
          return new Response(
            JSON.stringify({ error: "Invalid JSON body: " + error.message }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                ...corsHeaders,
              },
            }
          );
        }

      default:
        return new Response(
          JSON.stringify({ error: "Route not found" }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
    }
  },
};
