import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { unit_of_measure_module } from "./modules/unit-of-measure/unit-of-measure.routes.ts";
import { products_module } from "./modules/products/products.routes.ts";
import { inventory_stock_quant_module } from "./modules/inventory-stock-quant/inventory-stock-quant.routes.ts";
import { inventory_internal_location_module } from "./modules/inventory-internal-location/inventory-internal-location.routes.ts";
import { inventory_physical_count_module } from "./modules/inventory-physical-count/inventory-physical-count.routes.ts";
import { inventory_cost_entry_module } from "./modules/inventory-cost-entry/inventory-cost-entry.routes.ts";
import { inventory_reception_module } from "./modules/inventory-reception/inventory-reception.routes.ts";
import { pedidos_module } from "./modules/pedidos/pedidos.routes.ts";
import { pedidos_surtir_module } from "./modules/pedidos-surtir/pedidos-surtir.routes.ts";
import { inventory_movement_module } from "./modules/inventory-movement/inventory-movement.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-almacen",
  name: "Almacén",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-almacen:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "almacen.root",
    label: "Almacén",
    order: 0,
  },
  modules: [unit_of_measure_module, products_module, inventory_stock_quant_module, inventory_internal_location_module, inventory_physical_count_module, inventory_cost_entry_module, inventory_reception_module, pedidos_module, pedidos_surtir_module, inventory_movement_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
