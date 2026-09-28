# rolldown-plugin-build-size

Report the total build size.

- [Source code](https://github.com/joaopalmeiro/rolldown-plugin-build-size)
- [npm](https://www.npmjs.com/package/rolldown-plugin-build-size)
- [npmx](https://npmx.dev/package/rolldown-plugin-build-size)

## Usage

```ts
import buildSize from "rolldown-plugin-build-size";

export default {
  plugins: [buildSize()],
};
```

## Development

Install [zizmor](https://docs.zizmor.sh/installation/) and [pinact](https://github.com/suzuki-shunsuke/pinact/blob/main/INSTALL.md) (if necessary).

Install [fnm](https://github.com/Schniz/fnm) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run lint
```

```bash
npm run format
```

```bash
npm run build
```

```bash
npm pack --dry-run
```

### GitHub Actions

```bash
zizmor .
```

```bash
pinact run -u --min-age 7
```

## Deployment

### First version

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

```bash
echo "v$(npm pkg get version | tr -d \")" | pbcopy
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check [GitHub](https://github.com/joaopalmeiro/rolldown-plugin-build-size/tags).

```bash
npm login
```

```bash
npm publish
```

- Create the `release` [GitHub Actions environment](https://github.com/joaopalmeiro/rolldown-plugin-build-size/settings/environments).
- [Configure trusted publishing](https://docs.npmjs.com/trusted-publishers#configuring-trusted-publishing).

### Remaining versions

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

```bash
echo "v$(npm pkg get version | tr -d \")" | pbcopy
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check GitHub: [Tags](https://github.com/joaopalmeiro/rolldown-plugin-build-size/tags) and [Actions](https://github.com/joaopalmeiro/rolldown-plugin-build-size/actions).
- Check [npm](https://www.npmjs.com/package/rolldown-plugin-build-size).
