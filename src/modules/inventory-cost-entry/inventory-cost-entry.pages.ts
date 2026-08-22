import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_cost_entry_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-cost-entry",
    path: "inventory-cost-entry",
    permission: "subject.almacen.inventory-cost-entry.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-cost-entry",
        owner: "subject-almacen",
        title: "Entradas de costo",
        props: {
          basePath: "inventory-cost-entry",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Entradas de costo",
            subtitle: "Submenú de almacen",
            pluralLabel: "entradas de costo",
            singularLabel: "entradas de costo",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-cost-entry`,
            record: `${API}/inventory-cost-entry/:id`,
            create: { method: "POST", action: `${API}/inventory-cost-entry` },
            update: { method: "PATCH", action: `${API}/inventory-cost-entry/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-cost-entry/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "receipt_key", label: "receipt key", sortable: true, priority: 3 },
              { key: "recepcion_referencia", label: "recepcion referencia", sortable: true, priority: 3 },
              { key: "orden_compra_nombre", label: "orden compra nombre", sortable: true, priority: 3 },
              { key: "orden_compra_folio", label: "orden compra folio", sortable: true, priority: 3 },
              { key: "orden_compra_referencia", label: "orden compra referencia", sortable: true, priority: 3 },
              { key: "producto_nombre", label: "producto nombre", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "receipt_key", component: "input-text", label: "receipt key" },
              { name: "recepcion_referencia", component: "input-text", label: "recepcion referencia" },
              { name: "orden_compra_nombre", component: "input-text", label: "orden compra nombre" },
              { name: "orden_compra_folio", component: "input-number", label: "orden compra folio" },
              { name: "orden_compra_referencia", component: "input-text", label: "orden compra referencia" },
              { name: "producto_nombre", component: "input-text", label: "producto nombre" },
              { name: "producto_codigo", component: "input-text", label: "producto codigo" },
              { name: "proveedor_nombre", component: "input-text", label: "proveedor nombre" },
              { name: "tipo_origen", component: "input-text", label: "tipo origen" },
              { name: "cantidad", component: "input-number", label: "cantidad" },
              { name: "costo_unitario", component: "input-number", label: "costo unitario" },
              { name: "costo_total", component: "input-number", label: "costo total" },
              { name: "stock_previo", component: "input-number", label: "stock previo" },
              { name: "stock_resultante", component: "input-number", label: "stock resultante" },
              { name: "costo_promedio_resultante", component: "input-number", label: "costo promedio resultante" },
              { name: "fecha_entrada", component: "input-text", label: "fecha entrada" },
              { name: "orden_compra", component: "input-text", label: "orden compra" },
              { name: "producto", component: "input-text", label: "producto" },
              { name: "proveedor", component: "input-text", label: "proveedor" },
              { name: "proveedor_rfc", component: "input-text", label: "proveedor rfc" },
            ],
          },
        },
      }),
  },
];
