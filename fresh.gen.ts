// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[participant].tsx";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/timer.tsx";
import * as $$0 from "./islands/DataChart.tsx";
import * as $$1 from "./islands/ModalPrompt.tsx";
import * as $$2 from "./islands/Timer.tsx";

const manifest = {
  routes: {
    "./routes/[participant].tsx": $0,
    "./routes/index.tsx": $1,
    "./routes/timer.tsx": $2,
  },
  islands: {
    "./islands/DataChart.tsx": $$0,
    "./islands/ModalPrompt.tsx": $$1,
    "./islands/Timer.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
