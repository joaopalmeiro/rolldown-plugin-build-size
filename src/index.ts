import { Buffer } from "node:buffer";
import { gzipSync } from "node:zlib";

import type { Plugin } from "rolldown";

// Source: https://github.com/rolldown/rolldown/blob/v1.2.9/packages/rolldown/src/cli/commands/bundle.ts#L231-L238
const numberFormatter = new Intl.NumberFormat("en", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

function displaySize(bytes: number): string {
  return `${numberFormatter.format(bytes / 1000)} kB`;
}

interface Tally {
  files: number;
  rawBytes: number;
  gzipBytes: number;
}

function emptyTally(): Tally {
  return { files: 0, rawBytes: 0, gzipBytes: 0 };
}

export function buildSize(): Plugin {
  let tally = emptyTally();

  return {
    name: "build-size",
    writeBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        const source = file.type === "chunk" ? file.code : file.source;

        tally.files += 1;
        tally.rawBytes += typeof source === "string" ? Buffer.byteLength(source, "utf8") : source.byteLength;
        tally.gzipBytes += gzipSync(source).byteLength;
      }
    },
    closeBundle() {
      const { files, rawBytes, gzipBytes } = tally;

      tally = emptyTally();

      if (files === 0) {
        return;
      }

      const parts = [`${files} ${files === 1 ? "file" : "files"}`, displaySize(rawBytes)];
      parts.push(`${displaySize(gzipBytes)} gzip`);

      this.info(`total: ${parts.join(", ")}`);
    },
  };
}
