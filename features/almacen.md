# Almacén

App `Almacén` del menú principal de Imperium: productos, unidades de medida,
existencias, ubicaciones, lotes, conteos, recepciones, entradas de costo,
movimientos y pedidos por surtir. Esta ficha prueba que la app responde como
`subject-almacen` y publica su manifiesto con ese menú.

## Sub-features

La app hace la acción de `manifiesto`. Escribe: no.
La app hace la acción de `salud`. Escribe: no.

- `salud` deja un resultado observable: `GET /health` 200 con
  `status: "ok"`, `ready: true`, `service: "subject-almacen"`.
- `manifiesto` deja un resultado observable: `GET /manifest` 200 con
  `technicalId: "subject-almacen"` y `menu[0].id` igual a `almacen.root`.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `SUBJECT-almacen` (`subject-almacen`);
  sin `dependsOn`.
- `src/server.ts` — `serve_subject(SUBJECT)`.
- `vendor/kit/src/kirlet/serve.ts` — cuerpo de `/health` y `/manifest`.
- `vendor/kit/src/kirlet/runtime-auth.ts` — `/health` y `/manifest` no piden
  identidad firmada.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-almacen.salud` | `GET /health` | ninguno | GET a `http://127.0.0.1:3201/health` | HTTP 200, `service: "subject-almacen"`, `ready: true` | no | sin receta |
| `subject-almacen.manifiesto` | `GET /manifest` | ninguno | GET a `http://127.0.0.1:3201/manifest` | HTTP 200, `technicalId: "subject-almacen"`, `menu[0].id: "almacen.root"` | no | sin receta |

Base QA y rol semilla para recetas que muten: sin definir.

## How to get to it (user POV)

- Menú `Almacén` (`almacen.root`); primera entrada `Productos` (`path: products`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-almacen`, la receta sale `omitida`.

- **Abrir.** `GET /manifest` y comprobar `technicalId` y `menu[0].id`.
- **Proof.** `evidence/almacen/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Sin base QA definida no corre ninguna receta que mute.
- `omitida` no cuenta como probada.
