/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts"
import manifest from "./fresh.gen.ts"

import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "./twind.config.ts"

if (Deno.env.get("PRODUCTION") !== "true") {
  import("./environment.ts")
}

await start(manifest, { plugins: [twindPlugin(twindConfig)] })
