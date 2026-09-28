import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { inventory_lot_pages } from "./inventory-lot.pages.ts";
import { inventory_lot_tables } from "./inventory-lot.tables.ts";

export const inventory_lot_module = define_module({
  resource: "inventory-lot",
  labels: {
    singular: "Lote o serie",
    plural: "Lotes y series",
    read: "Ver Lotes y series",
    write: "Editar Lotes y series",
  },
  routes: define_crud({
    resource: "inventory-lot",
    table: "inventory_lot",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "lote",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      producto: { type: "string", search: true },
      producto_codigo: { type: "string", search: true },
      producto_nombre: { type: "string", search: true },
      tipo: { type: "string", search: true },
      fecha_caducidad: { type: "string", search: true },
      fecha_recepcion: { type: "string", search: true },
      proveedor: { type: "string", search: true },
      proveedor_nombre: { type: "string", search: true },
      orden_compra: { type: "string", search: true },
      recepcion: { type: "string", search: true },
      cantidad_recibida: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: inventory_lot_tables,
  pages: inventory_lot_pages,
  menu: [],
});
