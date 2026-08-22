import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const inventory_physical_count_tables: KirletTableDecl[] = [
  {
    name: "inventory_physical_count",
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
      { name: "ubicacion_codigo", type: "text" },
      { name: "estado", type: "text" },
      { name: "fecha", type: "text" },
      { name: "contado_por", type: "text" },
      { name: "total_lineas", type: "text" },
      { name: "producto", type: "text" },
      { name: "producto_nombre", type: "text" },
      { name: "producto_codigo", type: "text" },
      { name: "cantidad_sistema", type: "real" },
      { name: "cantidad_contada", type: "real" },
      { name: "diferencia", type: "real" },
      { name: "ubicacion", type: "text" },
      { name: "lineas", type: "json" },
    ],
    indexes: [
      { name: "idx_inventory_physical_count_name", columns: ["name"] },
      { name: "idx_inventory_physical_count_active", columns: ["is_active"] },
    ],
  },
];
