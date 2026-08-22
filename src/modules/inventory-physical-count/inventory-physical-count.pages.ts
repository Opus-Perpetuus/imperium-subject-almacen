import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_physical_count_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-physical-count",
    path: "inventory-physical-count",
    permission: "subject.almacen.inventory-physical-count.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-physical-count",
        owner: "subject-almacen",
        title: "Conteo físico",
        props: {
          basePath: "inventory-physical-count",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Conteo físico",
            subtitle: "Submenú de almacen",
            pluralLabel: "conteo físico",
            singularLabel: "conteo físico",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-physical-count`,
            record: `${API}/inventory-physical-count/:id`,
            create: { method: "POST", action: `${API}/inventory-physical-count` },
            update: { method: "PATCH", action: `${API}/inventory-physical-count/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-physical-count/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "ubicacion_codigo", label: "ubicacion codigo", sortable: true, priority: 3 },
              { key: "estado", label: "estado", sortable: true, priority: 3 },
              { key: "fecha", label: "fecha", sortable: true, priority: 3 },
              { key: "contado_por", label: "contado por", sortable: true, priority: 3 },
              { key: "total_lineas", label: "total lineas", sortable: true, priority: 3 },
              { key: "producto", label: "producto", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "ubicacion_codigo", component: "input-text", label: "ubicacion codigo" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "fecha", component: "input-text", label: "fecha" },
              { name: "contado_por", component: "input-text", label: "contado por" },
              { name: "total_lineas", component: "input-text", label: "total lineas" },
              { name: "producto", component: "input-text", label: "producto" },
              { name: "producto_nombre", component: "input-text", label: "producto nombre" },
              { name: "producto_codigo", component: "input-text", label: "producto codigo" },
              { name: "cantidad_sistema", component: "input-number", label: "cantidad sistema" },
              { name: "cantidad_contada", component: "input-number", label: "cantidad contada" },
              { name: "diferencia", component: "input-number", label: "diferencia" },
              { name: "ubicacion", component: "input-text", label: "ubicacion" },
              { name: "lineas", component: "input-json", label: "lineas" },
            ],
          },
        },
      }),
  },
];
