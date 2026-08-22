import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_reception_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-reception",
    path: "inventory-reception",
    permission: "subject.almacen.inventory-reception.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-reception",
        owner: "subject-almacen",
        title: "Recepciones",
        props: {
          basePath: "inventory-reception",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Recepciones",
            subtitle: "Submenú de almacen",
            pluralLabel: "recepciones",
            singularLabel: "recepciones",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-reception`,
            record: `${API}/inventory-reception/:id`,
            create: { method: "POST", action: `${API}/inventory-reception` },
            update: { method: "PATCH", action: `${API}/inventory-reception/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-reception/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "estado", label: "estado", sortable: true, priority: 3 },
              { key: "purchase_order_nombre", label: "purchase order nombre", sortable: true, priority: 3 },
              { key: "purchase_order_id", label: "purchase order id", sortable: true, priority: 3 },
              { key: "producto_id", label: "producto id", sortable: true, priority: 3 },
              { key: "proveedor_nombre", label: "proveedor nombre", sortable: true, priority: 3 },
              { key: "referencia", label: "referencia", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "purchase_order_nombre", component: "input-text", label: "purchase order nombre" },
              { name: "purchase_order_id", component: "input-text", label: "purchase order id" },
              { name: "producto_id", component: "input-text", label: "producto id" },
              { name: "proveedor_nombre", component: "input-text", label: "proveedor nombre" },
              { name: "referencia", component: "input-text", label: "referencia" },
              { name: "fecha_esperada", component: "input-text", label: "fecha esperada" },
              { name: "total_esperado", component: "input-number", label: "total esperado" },
              { name: "total_recibido", component: "input-number", label: "total recibido" },
              { name: "documento_tipo", component: "input-text", label: "documento tipo" },
              { name: "documento_id", component: "input-text", label: "documento id" },
              { name: "documento_nombre", component: "input-text", label: "documento nombre" },
              { name: "cantidad", component: "input-number", label: "cantidad" },
              { name: "producto", component: "input-text", label: "producto" },
              { name: "producto_nombre", component: "input-text", label: "producto nombre" },
              { name: "producto_codigo", component: "input-text", label: "producto codigo" },
              { name: "codigo_proveedor", component: "input-text", label: "codigo proveedor" },
              { name: "cantidad_esperada", component: "input-number", label: "cantidad esperada" },
              { name: "cantidad_recibida", component: "input-number", label: "cantidad recibida" },
              { name: "cantidad_acomodada", component: "input-number", label: "cantidad acomodada" },
              { name: "costo_unitario", component: "input-number", label: "costo unitario" },
              { name: "reservas", component: "input-json", label: "reservas" },
              { name: "purchase_order", component: "input-text", label: "purchase order" },
              { name: "proveedor", component: "input-text", label: "proveedor" },
              { name: "proveedor_rfc", component: "input-text", label: "proveedor rfc" },
              { name: "uuid_xml", component: "input-text", label: "uuid xml" },
              { name: "articulos", component: "input-json", label: "articulos" },
            ],
          },
        },
      }),
  },
];
