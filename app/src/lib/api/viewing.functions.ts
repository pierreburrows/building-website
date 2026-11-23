import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

const viewingRequest = z.object({
  email: z.string().trim().email().max(200),
  message: z.string().trim().max(2000).default(""),
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().max(40).default(""),
  residence: z.enum(["undecided", "garden", "corner", "penthouse"]),
});

/** Stores a private-viewing request in the site's own D1 table (server only). */
export const requestViewing = createServerFn({ method: "POST" })
  .validator(viewingRequest)
  .handler(async ({ data }) => {
    const { DB } = bindings();
    if (!DB) {
      // The database is provisioned by the platform from app.manifest.json;
      // without it the request is acknowledged but cannot be stored.
      return { ok: true as const, stored: false };
    }
    await DB.prepare(
      "INSERT INTO viewing_requests (name, email, phone, residence, message) VALUES (?1, ?2, ?3, ?4, ?5)",
    )
      .bind(data.name, data.email, data.phone, data.residence, data.message)
      .run();
    return { ok: true as const, stored: true };
  });
