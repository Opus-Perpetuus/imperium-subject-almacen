import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const inventory_lot_tables: KirletTableDecl[] = [
  {
    name: "inventory_lot",
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
      { name: "producto", type: "text" },
      { name: "producto_codigo", type: "text" },
      { name: "producto_nombre", type: "text" },
      { name: "tipo", type: "text" },
      { name: "fecha_caducidad", type: "text" },
      { name: "fecha_recepcion", type: "text" },
      { name: "proveedor", type: "text" },
      { name: "proveedor_nombre", type: "text" },
      { name: "orden_compra", type: "text" },
      { name: "recepcion", type: "text" },
      { name: "cantidad_recibida", type: "real" },
    ],
    indexes: [
      { name: "idx_inventory_lot_name", columns: ["name"] },
      { name: "idx_inventory_lot_active", columns: ["is_active"] },
      { name: "idx_inventory_lot_producto", columns: ["producto"] },
    ],
  },
];
