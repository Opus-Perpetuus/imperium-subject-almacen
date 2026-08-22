import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const unit_of_measure_pages: KirletPageDecl[] = [
  {
    id: "almacen.unit-of-measure",
    path: "unit-of-measure",
    permission: "subject.almacen.unit-of-measure.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.unit-of-measure",
        owner: "subject-almacen",
        title: "Unidades de medida",
        props: {
          basePath: "unit-of-measure",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Unidades de medida",
            subtitle: "Submenú de almacen",
            pluralLabel: "unidades de medida",
            singularLabel: "unidades de medida",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/unit-of-measure`,
            record: `${API}/unit-of-measure/:id`,
            create: { method: "POST", action: `${API}/unit-of-measure` },
            update: { method: "PATCH", action: `${API}/unit-of-measure/:id` },
            delete: { method: "DELETE", action: `${API}/unit-of-measure/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "clave_unidad", label: "clave unidad", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "clave_unidad", component: "input-text", label: "clave unidad" },
            ],
          },
        },
      }),
  },
];
