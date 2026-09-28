import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_lot_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-lot",
    path: "inventory-lot",
    permission: "subject.almacen.inventory-lot.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-lot",
        owner: "subject-almacen",
        title: "Lotes y series",
        props: {
          basePath: "inventory-lot",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Lotes y series",
            subtitle: "Submenú de almacen",
            pluralLabel: "lotes y series",
            singularLabel: "lote o serie",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-lot`,
            record: `${API}/inventory-lot/:id`,
            create: { method: "POST", action: `${API}/inventory-lot` },
            update: { method: "PATCH", action: `${API}/inventory-lot/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-lot/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "producto_nombre", label: "producto nombre", sortable: true, priority: 3 },
              { key: "producto_codigo", label: "producto codigo", sortable: true, priority: 3 },
              { key: "tipo", label: "tipo", sortable: true, priority: 3 },
              { key: "fecha_caducidad", label: "fecha caducidad", sortable: true, priority: 3 },
              { key: "fecha_recepcion", label: "fecha recepcion", sortable: true, priority: 3 },
              { key: "cantidad_recibida", label: "cantidad recibida", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "producto", component: "input-datalist", label: "producto", optionsSource: "api://m/subject-almacen/products?as=options&limite=1000" },
              { name: "producto_codigo", component: "input-text", label: "producto codigo" },
              { name: "producto_nombre", component: "input-text", label: "producto nombre" },
              { name: "tipo", component: "input-text", label: "tipo" },
              { name: "fecha_caducidad", component: "input-date", label: "fecha caducidad" },
              { name: "fecha_recepcion", component: "input-date", label: "fecha recepcion" },
              { name: "proveedor", component: "input-text", label: "proveedor" },
              { name: "proveedor_nombre", component: "input-text", label: "proveedor nombre" },
              { name: "orden_compra", component: "input-text", label: "orden compra" },
              { name: "recepcion", component: "input-text", label: "recepcion" },
              { name: "cantidad_recibida", component: "input-number", label: "cantidad recibida" },
            ],
          },
        },
      }),
  },
];
