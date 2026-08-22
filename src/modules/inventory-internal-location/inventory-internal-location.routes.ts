import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { inventory_internal_location_pages } from "./inventory-internal-location.pages.ts";
import { inventory_internal_location_tables } from "./inventory-internal-location.tables.ts";

export const inventory_internal_location_module = define_module({
  resource: "inventory-internal-location",
  labels: {
    singular: "Ubicaciones internas",
    plural: "Ubicaciones internas",
    read: "Ver Ubicaciones internas",
    write: "Editar Ubicaciones internas",
  },
  routes: define_crud({
    resource: "inventory-internal-location",
    table: "inventory_internal_location",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "inventor",
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
      codigo: { type: "string", search: true },
      tipo: { type: "string", search: true },
      parent: { type: "string", search: true },
      segmento_codigo: { type: "string", search: true },
      nivel: { type: "number" },
      nivel_nombre: { type: "string", search: true },
      permite_almacenaje: { type: "boolean" },
      secuencia_surtido: { type: "number" },
      is_system: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: inventory_internal_location_tables,
  pages: inventory_internal_location_pages,
  menu: [],
});
