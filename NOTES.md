# Notes

- https://github.com/joaopalmeiro/template-ts-package
- [bundlejs](https://bundlejs.com/?bundle&q=rolldown-plugin-build-size)
- [Licenses](https://licenses.dev/npm/rolldown-plugin-build-size)
- [Node Modules Inspector](https://node-modules.dev/report#install=rolldown-plugin-build-size)
- [npm trends](https://npmtrends.com/rolldown-plugin-build-size)
- [npmgraph.an](https://npm.anvaka.com/#/view/2d/rolldown-plugin-build-size)
- [npmgraph](https://npmgraph.js.org/?q=rolldown-plugin-build-size)
- [Package Phobia](https://packagephobia.com/result?p=rolldown-plugin-build-size)
- [Snyk](https://security.snyk.io/package/npm/rolldown-plugin-build-size)
- https://vite.dev/guide/api-plugin
  - https://rolldown.rs/apis/plugin-api#conventions
  - https://rolldown.rs/reference/Interface.Plugin#build-hooks
  - https://vite.dev/config/build-options
- https://nodejs.org/api/util.html#class-utiltextencoder

## Snippets

- https://github.com/rolldown/plugins/blob/d427660aa92889a46ac751e870fd823616d9e872/packages/transform-imports/package.json

```json
{
  "name": "@rolldown/plugin-transform-imports",
  "version": "0.1.2",
  "description": "Rolldown plugin for transforming import/exports to barrel files",
  "keywords": ["imports", "modularize", "plugin", "rolldown", "rolldown-plugin", "transform-imports", "tree-shaking"],
  "homepage": "https://github.com/rolldown/plugins/tree/main/packages/transform-imports#readme",
  "bugs": {
    "url": "https://github.com/rolldown/plugins/issues"
  },
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rolldown/plugins.git",
    "directory": "packages/transform-imports"
  },
  "files": ["dist"],
  "type": "module",
  "exports": "./dist/index.mjs",
  "scripts": {
    "dev": "tsdown --watch",
    "build": "tsdown",
    "test": "vitest --project transform-imports",
    "prepublishOnly": "pnpm run build"
  },
  "dependencies": {
    "rolldown-string": "^0.3.1"
  },
  "devDependencies": {
    "rolldown": "catalog:",
    "tinyglobby": "^0.2.17"
  },
  "peerDependencies": {
    "rolldown": "^1.0.0-rc.13",
    "vite": "^8.0.0"
  },
  "peerDependenciesMeta": {
    "vite": {
      "optional": true
    }
  },
  "engines": {
    "node": ">=22.12.0 || ^24.0.0"
  },
  "compatiblePackages": {
    "schemaVersion": 1,
    "rollup": {
      "type": "incompatible",
      "reason": "Uses Rolldown-specific APIs"
    }
  }
}
```
