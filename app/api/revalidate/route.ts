import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

type WebhookBody = {
  api?: string;
  id?: string;
  contentId?: string;
  contents?: { id?: string }[];
};

export async function POST(request: NextRequest) {
  // Check for microCMS signature header or query parameter secret
  const signature = request.headers.get("x-microcms-signature");
  const querySecret = request.nextUrl.searchParams.get("secret");
  const webhookSecret = process.env.MICROCMS_WEBHOOK_SECRET;
  const revalidateSecret = process.env.REVALIDATE_SECRET;

  // Validate authentication
  const isValidSignature = webhookSecret && signature === webhookSecret;
  const isValidQuerySecret =
    revalidateSecret && querySecret === revalidateSecret;

  if (!isValidSignature && !isValidQuerySecret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: WebhookBody | null = null;
  try {
    body = (await request.json()) as WebhookBody;
  } catch {
    body = null;
  }

  const api = body?.api;

  // Revalidate based on content type
  switch (api) {
    case "home-page":
      revalidatePath("/");
      break;
    case "company-info":
      revalidatePath("/company");
      revalidatePath("/contact");
      revalidatePath("/privacy");
      break;
    case "company-page":
      revalidatePath("/company");
      break;
    case "contact-page":
      revalidatePath("/contact");
      break;
    case "privacy-page":
      revalidatePath("/privacy");
      break;
    case "layout":
      revalidatePath("/", "layout");
      break;
    default:
      // Revalidate all pages for unknown API
      revalidatePath("/");
      revalidatePath("/company");
      revalidatePath("/contact");
      revalidatePath("/privacy");
  }

  return NextResponse.json({
    revalidated: true,
    api: api ?? null,
    timestamp: new Date().toISOString(),
  });
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Revalidation endpoint is ready",
  });
}
