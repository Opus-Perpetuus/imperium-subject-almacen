import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const inventory_stock_quant_tables: KirletTableDecl[] = [
  {
    name: "inventory_stock_quant",
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
      { name: "producto_nombre", type: "text" },
      { name: "producto_codigo", type: "text" },
      { name: "producto_id", type: "text" },
      { name: "ubicacion_id", type: "text" },
      { name: "ubicacion_codigo", type: "text" },
      { name: "cantidad", type: "real" },
      { name: "cantidad_apartada", type: "real" },
      { name: "cantidad_disponible", type: "real" },
      { name: "producto", type: "text" },
      { name: "ubicacion", type: "text" },
    ],
    indexes: [
      { name: "idx_inventory_stock_quant_name", columns: ["name"] },
      { name: "idx_inventory_stock_quant_active", columns: ["is_active"] },
    ],
  },
];
