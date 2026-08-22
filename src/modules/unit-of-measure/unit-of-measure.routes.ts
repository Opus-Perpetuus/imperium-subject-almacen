import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { unit_of_measure_pages } from "./unit-of-measure.pages.ts";
import { unit_of_measure_tables } from "./unit-of-measure.tables.ts";

export const unit_of_measure_module = define_module({
  resource: "unit-of-measure",
  labels: {
    singular: "Unidades de medida",
    plural: "Unidades de medida",
    read: "Ver Unidades de medida",
    write: "Editar Unidades de medida",
  },
  routes: define_crud({
    resource: "unit-of-measure",
    table: "unit_of_measure",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "unit-of-",
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
      clave_unidad: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: unit_of_measure_tables,
  pages: unit_of_measure_pages,
  menu: [
    {
      id: "almacen.products",
      label: "Productos",
      order: 10,
      pageId: "almacen.products",
      path: "products",
      permission: "subject.almacen.products.read",
      icon: "document",
    },
    {
      id: "almacen.unit-of-measure",
      label: "Unidades de medida",
      order: 15,
      pageId: "almacen.unit-of-measure",
      path: "unit-of-measure",
      permission: "subject.almacen.unit-of-measure.read",
      icon: "document",
    },
    {
      id: "almacen.folder.menu-management-inventory-stock",
      label: "Ubicaciones y existencias",
      order: 20,
      children: [
        {
          id: "almacen.inventory-internal-location",
          label: "Ubicaciones internas",
          order: 10,
          pageId: "almacen.inventory-internal-location",
          path: "inventory-internal-location",
          permission: "subject.almacen.inventory-internal-location.read",
          icon: "document",
        },
        {
          id: "almacen.inventory-stock-quant",
          label: "Existencias por ubicación",
          order: 20,
          pageId: "almacen.inventory-stock-quant",
          path: "inventory-stock-quant",
          permission: "subject.almacen.inventory-stock-quant.read",
          icon: "document",
        },
        {
          id: "almacen.inventory-physical-count",
          label: "Conteo físico",
          order: 30,
          pageId: "almacen.inventory-physical-count",
          path: "inventory-physical-count",
          permission: "subject.almacen.inventory-physical-count.read",
          icon: "document",
        }
      ],
    },
    {
      id: "almacen.folder.menu-management-inventory-inbound",
      label: "Entradas",
      order: 30,
      children: [
        {
          id: "almacen.inventory-reception",
          label: "Recepciones",
          order: 10,
          pageId: "almacen.inventory-reception",
          path: "inventory-reception",
          permission: "subject.almacen.inventory-reception.read",
          icon: "document",
        },
        {
          id: "almacen.inventory-cost-entry",
          label: "Entradas de costo",
          order: 20,
          pageId: "almacen.inventory-cost-entry",
          path: "inventory-cost-entry",
          permission: "subject.almacen.inventory-cost-entry.read",
          icon: "document",
        }
      ],
    },
    {
      id: "almacen.inventory-movement",
      label: "Movimientos de inventario",
      order: 40,
      pageId: "almacen.inventory-movement",
      path: "inventory-movement",
      permission: "subject.almacen.inventory-movement.read",
      icon: "document",
    },
    {
      id: "almacen.folder.menu-management-inventory-picking",
      label: "Surtido",
      order: 50,
      children: [
        {
          id: "almacen.pedidos-surtir",
          label: "Por surtir",
          order: 10,
          pageId: "almacen.pedidos-surtir",
          path: "pedidos-surtir",
          permission: "subject.almacen.pedidos-surtir.read",
          icon: "document",
        },
        {
          id: "almacen.pedidos",
          label: "Pedidos (almacén)",
          order: 20,
          pageId: "almacen.pedidos",
          path: "pedidos",
          permission: "subject.almacen.pedidos.read",
          icon: "document",
        }
      ],
    }
    ],
});
