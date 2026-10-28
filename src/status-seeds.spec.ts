import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  push_status_seeds,
  STATUS_OPTION_SEED_PATH,
  STATUS_OPTION_SEEDS,
} from "./status-seeds";

describe("status seeds", () => {
  test("cada seed tiene valores únicos con campo", () => {
    for (const s of STATUS_OPTION_SEEDS) {
      const values = s.options.map((o) => o.value);
      expect(new Set(values).size).toBe(values.length);
      expect(s.options.every((o) => o.field_name === s.status_fields?.[0])).toBe(true);
      expect(
        s.options.every((o) => /^#[0-9a-f]{6}$/.test(o.color) && /^fas fa-[a-z0-9-]+$/.test(o.icon ?? "")),
      ).toBe(true);
      expect(s.model_id.startsWith("subject-almacen/")).toBe(true);
    }
  });

  test("cubre reception/count/movement/location alineados a RAW_DEFAULTS", () => {
    const ids = STATUS_OPTION_SEEDS.map((s) => `${s.model_id}:${s.status_fields?.[0]}`);
    expect(ids).toContain("subject-almacen/inventory-reception:estado");
    expect(ids).toContain("subject-almacen/inventory-physical-count:estado");
    expect(ids).toContain("subject-almacen/inventory-movement:tipo_movimiento");
    expect(ids).toContain("subject-almacen/inventory-internal-location:tipo");
  });

  test("pages usan input-status sin options literales", () => {
    for (const [rel, field] of [
      ["./modules/inventory-reception/inventory-reception.pages.ts", "estado"],
      ["./modules/inventory-physical-count/inventory-physical-count.pages.ts", "estado"],
      ["./modules/inventory-movement/inventory-movement.pages.ts", "tipo_movimiento"],
      ["./modules/inventory-internal-location/inventory-internal-location.pages.ts", "tipo"],
    ] as const) {
      const src = readFileSync(new URL(rel, import.meta.url), "utf8");
      expect(src).toMatch(new RegExp(`name: "${field}",\\n\\s+component: "input-status",`));
      expect(src).not.toMatch(new RegExp(`name: "${field}"[\\s\\S]*?options:\\s*\\[`));
    }
  });
});

describe("push_status_seeds", () => {
  const env = {
    CORE_DATA_URL: "http://core:3000/api/kirlets/data/x",
    SUBJECT_TECHNICAL_ID: "subject-almacen",
    CORE_SUBJECT_GATEWAY_SECRET: "s",
  };
  test("sin env no llama", async () => {
    expect(
      await push_status_seeds({
        env: {},
        fetchImpl: (async () => new Response()) as unknown as typeof fetch,
      }),
    ).toEqual({ pushed: false, reason: "core_not_configured" });
  });
  test("POST entries a seed-defaults del núcleo", async () => {
    let url = "";
    const fetchImpl = (async (u: string) => {
      url = u;
      return Response.json({ data: [] });
    }) as unknown as typeof fetch;
    const r = await push_status_seeds({ env, fetchImpl });
    expect(url).toBe(`http://core:3000${STATUS_OPTION_SEED_PATH}`);
    expect(r.pushed).toBe(true);
  });
});
