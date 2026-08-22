import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-almacen";

export const inventory_movement_pages: KirletPageDecl[] = [
  {
    id: "almacen.inventory-movement",
    path: "inventory-movement",
    permission: "subject.almacen.inventory-movement.read",
    build: () =>
      build_feature_shell_page({
        id: "almacen.inventory-movement",
        owner: "subject-almacen",
        title: "Movimientos de inventario",
        props: {
          basePath: "inventory-movement",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Movimientos de inventario",
            subtitle: "Submenú de almacen",
            pluralLabel: "movimientos de inventario",
            singularLabel: "movimientos de inventario",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/inventory-movement`,
            record: `${API}/inventory-movement/:id`,
            create: { method: "POST", action: `${API}/inventory-movement` },
            update: { method: "PATCH", action: `${API}/inventory-movement/:id` },
            delete: { method: "DELETE", action: `${API}/inventory-movement/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "producto_nombre", label: "producto nombre", sortable: true, priority: 3 },
              { key: "producto_codigo", label: "producto codigo", sortable: true, priority: 3 },
              { key: "producto_id", label: "producto id", sortable: true, priority: 3 },
              { key: "ubicacion_origen_id", label: "ubicacion origen id", sortable: true, priority: 3 },
              { key: "ubicacion_destino_id", label: "ubicacion destino id", sortable: true, priority: 3 },
              { key: "tipo_movimiento", label: "tipo movimiento", sortable: true, priority: 3 },
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
              { name: "ubicacion_origen_id", component: "input-text", label: "ubicacion origen id" },
              { name: "ubicacion_destino_id", component: "input-text", label: "ubicacion destino id" },
              { name: "tipo_movimiento", component: "input-text", label: "tipo movimiento" },
              { name: "ubicacion_origen_nombre", component: "input-text", label: "ubicacion origen nombre" },
              { name: "ubicacion_destino_nombre", component: "input-text", label: "ubicacion destino nombre" },
              { name: "documento_tipo", component: "input-text", label: "documento tipo" },
              { name: "documento_nombre", component: "input-text", label: "documento nombre" },
              { name: "documento_referencia", component: "input-text", label: "documento referencia" },
              { name: "cantidad", component: "input-number", label: "cantidad" },
              { name: "costo_unitario", component: "input-number", label: "costo unitario" },
              { name: "stock_total_previo", component: "input-number", label: "stock total previo" },
              { name: "stock_total_resultante", component: "input-number", label: "stock total resultante" },
              { name: "stock_apartado_previo", component: "input-number", label: "stock apartado previo" },
              { name: "stock_apartado_resultante", component: "input-number", label: "stock apartado resultante" },
              { name: "stock_disponible_resultante", component: "input-number", label: "stock disponible resultante" },
              { name: "fecha_movimiento", component: "input-text", label: "fecha movimiento" },
              { name: "producto", component: "input-text", label: "producto" },
              { name: "ubicacion_origen", component: "input-text", label: "ubicacion origen" },
              { name: "ubicacion_destino", component: "input-text", label: "ubicacion destino" },
              { name: "documento_id", component: "input-text", label: "documento id" },
              { name: "documento_modelo", component: "input-text", label: "documento modelo" },
              { name: "dedupe_key", component: "input-text", label: "dedupe key" },
            ],
          },
        },
      }),
  },
];
