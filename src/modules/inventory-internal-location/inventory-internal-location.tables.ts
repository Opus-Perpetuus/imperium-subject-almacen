import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const inventory_internal_location_tables: KirletTableDecl[] = [
  {
    name: "inventory_internal_location",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "codigo", type: "text" },
      { name: "tipo", type: "text" },
      { name: "parent", type: "text" },
      { name: "segmento_codigo", type: "text" },
      { name: "nivel", type: "real" },
      { name: "nivel_nombre", type: "text" },
      { name: "permite_almacenaje", type: "boolean" },
      { name: "secuencia_surtido", type: "real" },
      { name: "is_system", type: "boolean" },
    ],
    indexes: [
      { name: "idx_inventory_internal_location_name", columns: ["name"] },
      { name: "idx_inventory_internal_location_active", columns: ["is_active"] },
    ],
  },
];
