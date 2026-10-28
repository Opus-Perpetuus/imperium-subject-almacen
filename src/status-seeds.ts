/**
 * Estatus de almacén para status-option-control del núcleo.
 * Alineado con RAW_DEFAULTS: inventory-reception, physical-count,
 * movement.tipo_movimiento, internal-location.tipo.
 */
export const STATUS_OPTION_SEED_PATH = "/api/status-option-control/seed-defaults";

export type StatusOption = { value: string; label: string; color: string; icon?: string };

export type StatusOptionSeed = {
  model_id: string;
  module_name?: string;
  status_fields?: string[];
  options: Array<StatusOption & { field_name: string }>;
};

function seed(model_id: string, field_name: string, options: StatusOption[]): StatusOptionSeed {
  return {
    model_id,
    module_name: model_id,
    status_fields: [field_name],
    options: options.map((o) => ({ ...o, field_name })),
  };
}

export const RECEPTION_ESTADO_OPTIONS: StatusOption[] = [
  { value: "pendiente", label: "Pendiente", color: "#ffc107", icon: "fas fa-hourglass-half" },
  { value: "parcial", label: "Parcial", color: "#0dcaf0", icon: "fas fa-adjust" },
  { value: "recibida", label: "Recibida", color: "#198754", icon: "fas fa-check-circle" },
  { value: "cancelada", label: "Cancelada", color: "#dc3545", icon: "fas fa-ban" },
];

export const PHYSICAL_COUNT_ESTADO_OPTIONS: StatusOption[] = [
  { value: "borrador", label: "Borrador", color: "#ffc107", icon: "fas fa-file" },
  { value: "contado", label: "Contado", color: "#0dcaf0", icon: "fas fa-clipboard-check" },
  { value: "aplicado", label: "Aplicado", color: "#198754", icon: "fas fa-check" },
];

export const MOVEMENT_TIPO_OPTIONS: StatusOption[] = [
  { value: "recepcion_compra", label: "Recepción compra", color: "#198754", icon: "fas fa-dolly" },
  { value: "apartado_logistica", label: "Apartado logística", color: "#0dcaf0", icon: "fas fa-box" },
  { value: "liberacion_logistica", label: "Liberación logística", color: "#ffc107", icon: "fas fa-box-open" },
  { value: "salida_entrega", label: "Salida entrega", color: "#0d6efd", icon: "fas fa-truck" },
  { value: "transferencia_interna", label: "Transferencia interna", color: "#6c757d", icon: "fas fa-exchange-alt" },
  { value: "ajuste_manual", label: "Ajuste manual", color: "#dc3545", icon: "fas fa-wrench" },
  { value: "recepcion_devolucion", label: "Recepción devolución", color: "#0dcaf0", icon: "fas fa-undo" },
];

export const LOCATION_TIPO_OPTIONS: StatusOption[] = [
  { value: "almacen", label: "Almacén", color: "#198754", icon: "fas fa-warehouse" },
  { value: "logistica", label: "Logística", color: "#0dcaf0", icon: "fas fa-truck-loading" },
  { value: "transito", label: "Tránsito", color: "#ffc107", icon: "fas fa-shipping-fast" },
  { value: "cliente", label: "Cliente", color: "#0d6efd", icon: "fas fa-user" },
  { value: "ajuste", label: "Ajuste", color: "#dc3545", icon: "fas fa-sliders-h" },
];

const S = "subject-almacen";

export const STATUS_OPTION_SEEDS: StatusOptionSeed[] = [
  seed(`${S}/inventory-reception`, "estado", RECEPTION_ESTADO_OPTIONS),
  seed(`${S}/inventory-physical-count`, "estado", PHYSICAL_COUNT_ESTADO_OPTIONS),
  seed(`${S}/inventory-movement`, "tipo_movimiento", MOVEMENT_TIPO_OPTIONS),
  seed(`${S}/inventory-internal-location`, "tipo", LOCATION_TIPO_OPTIONS),
];

export type PushStatusSeedsOptions = {
  env?: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
  timeout_ms?: number;
};

export type PushStatusSeedsResult =
  | { pushed: true; status: number; data: unknown }
  | { pushed: false; reason: string; status?: number };

export async function push_status_seeds(opts: PushStatusSeedsOptions = {}): Promise<PushStatusSeedsResult> {
  const env = opts.env ?? process.env;
  const base = (env.CORE_DATA_URL?.trim() || env.NOX_DATA_URL?.trim() || "")
    .replace(/\/api\/kirlets\/data\/.*$/, "")
    .replace(/\/+$/, "");
  const caller = env.SUBJECT_TECHNICAL_ID?.trim() || env.KIRLET_TECHNICAL_ID?.trim() || "";
  const secret = env.CORE_SUBJECT_GATEWAY_SECRET?.trim() || env.NOX_KIRLET_GATEWAY_SECRET?.trim() || "";
  if (!base || !caller || !secret) return { pushed: false, reason: "core_not_configured" };
  try {
    const res = await (opts.fetchImpl ?? fetch)(`${base}${STATUS_OPTION_SEED_PATH}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-core-subject-gateway-secret": secret,
        "x-imperium-subject": caller,
      },
      body: JSON.stringify({ entries: STATUS_OPTION_SEEDS }),
      signal: AbortSignal.timeout(opts.timeout_ms ?? 12_000),
    });
    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      /* sin JSON */
    }
    if (!res.ok) return { pushed: false, reason: "core_refused", status: res.status };
    return { pushed: true, status: res.status, data };
  } catch (err) {
    return { pushed: false, reason: err instanceof Error ? err.message : String(err) };
  }
}
