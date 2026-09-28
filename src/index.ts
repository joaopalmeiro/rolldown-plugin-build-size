import { Buffer } from "node:buffer";
import { gzipSync } from "node:zlib";

import type { Plugin } from "rolldown";

interface Data {
  files: number;
  rawBytes: number;
  gzipBytes: number;
}
// Source: https://github.com/rolldown/rolldown/blob/v1.2.9/packages/rolldown/src/cli/commands/bundle.ts#L231-L238
const numberFormatter = new Intl.NumberFormat("en", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

function displaySize(bytes: number): string {
  return `${numberFormatter.format(bytes / 1000)} kB`;
}

export default function buildSizePlugin(): Plugin {
  const data: Data = { files: 0, gzipBytes: 0, rawBytes: 0 };

  return {
    name: "rolldown-plugin-build-size",
    closeBundle() {
      this.info(
        `total: ${data.files} ${data.files === 1 ? "file" : "files"}, ${displaySize(data.rawBytes)} raw, ${displaySize(data.gzipBytes)} gzip`,
      );
    },
    writeBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        const source = file.type === "chunk" ? file.code : file.source;

        data.files += 1;
        data.rawBytes += typeof source === "string" ? Buffer.byteLength(source, "utf8") : source.byteLength;
        data.gzipBytes += gzipSync(source).byteLength;
      }
    },
  };
}
