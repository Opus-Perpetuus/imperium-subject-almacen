import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_internal_location_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-internal-location",
    path: "inventory-internal-location",
    permission: "subject.almacen.inventory-internal-location.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-internal-location",
        owner: "subject-almacen",
        title: "Ubicaciones internas",
        props: {
          basePath: "inventory-internal-location",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Ubicaciones internas",
            subtitle: "Submenú de almacen",
            pluralLabel: "ubicaciones internas",
            singularLabel: "ubicaciones internas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-internal-location`,
            record: `${API}/inventory-internal-location/:id`,
            create: { method: "POST", action: `${API}/inventory-internal-location` },
            update: { method: "PATCH", action: `${API}/inventory-internal-location/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-internal-location/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "codigo", label: "codigo", sortable: true, priority: 3 },
              { key: "tipo", label: "tipo", sortable: true, priority: 3 },
              { key: "parent", label: "parent", sortable: true, priority: 3 },
              { key: "segmento_codigo", label: "segmento codigo", sortable: true, priority: 3 },
              { key: "nivel", label: "nivel", sortable: true, priority: 3 },
              { key: "nivel_nombre", label: "nivel nombre", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "codigo", component: "input-text", label: "codigo" },
              { name: "tipo", component: "input-text", label: "tipo" },
              { name: "parent", component: "input-text", label: "parent" },
              { name: "segmento_codigo", component: "input-text", label: "segmento codigo" },
              { name: "nivel", component: "input-number", label: "nivel" },
              { name: "nivel_nombre", component: "input-text", label: "nivel nombre" },
              { name: "permite_almacenaje", component: "input-checkbox", label: "permite almacenaje" },
              { name: "secuencia_surtido", component: "input-number", label: "secuencia surtido" },
              { name: "is_system", component: "input-checkbox", label: "is system" },
            ],
          },
        },
      }),
  },
];
