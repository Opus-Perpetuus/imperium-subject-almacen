import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_stock_quant_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-stock-quant",
    path: "inventory-stock-quant",
    permission: "subject.almacen.inventory-stock-quant.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-stock-quant",
        owner: "subject-almacen",
        title: "Existencias por ubicación",
        props: {
          basePath: "inventory-stock-quant",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Existencias por ubicación",
            subtitle: "Submenú de almacen",
            pluralLabel: "existencias por ubicación",
            singularLabel: "existencias por ubicación",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-stock-quant`,
            record: `${API}/inventory-stock-quant/:id`,
            create: { method: "POST", action: `${API}/inventory-stock-quant` },
            update: { method: "PATCH", action: `${API}/inventory-stock-quant/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-stock-quant/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "producto_nombre", label: "producto nombre", sortable: true, priority: 3 },
              { key: "producto_codigo", label: "producto codigo", sortable: true, priority: 3 },
              { key: "producto_id", label: "producto id", sortable: true, priority: 3 },
              { key: "ubicacion_id", label: "ubicacion id", sortable: true, priority: 3 },
              { key: "ubicacion_codigo", label: "ubicacion codigo", sortable: true, priority: 3 },
              { key: "cantidad", label: "cantidad", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "producto_nombre", component: "input-text", label: "producto nombre" },
              { name: "producto_codigo", component: "input-text", label: "producto codigo" },
              { name: "producto_id", component: "input-text", label: "producto id" },
              { name: "ubicacion_id", component: "input-text", label: "ubicacion id" },
              { name: "ubicacion_codigo", component: "input-text", label: "ubicacion codigo" },
              { name: "cantidad", component: "input-number", label: "cantidad" },
              { name: "cantidad_apartada", component: "input-number", label: "cantidad apartada" },
              { name: "cantidad_disponible", component: "input-number", label: "cantidad disponible" },
              { name: "producto", component: "input-text", label: "producto" },
              { name: "ubicacion", component: "input-text", label: "ubicacion" },
            ],
          },
        },
      }),
  },
];
