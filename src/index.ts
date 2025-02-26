import process from 'node:process'
import { isArray } from 'lazy-js-utils'
import { jsShell } from 'lazy-js-utils/node'

const commands = {
  npm: (pkg: string) => `npm list ${pkg} --depth=0 --json`,
  pnpm: (pkg: string) => `pnpm list ${pkg} --depth=0 --json`,
  yarn: (pkg: string) => `yarn list ${pkg} --depth=0 --json`,
  bun: (pkg: string) => `bun list ${pkg} --depth=0 --json`,
}
export function getLibVersion(pkg: string, cwd = process.cwd()): Promise<string | undefined> {
  // 用 npm、pnpm、yarn、bun 同时获取包的版本号
  return Promise.any(Object.values(commands).map(async (command) => {
    const { result, status } = await jsShell(command(pkg), {
      errorExit: false,
      cwd,
    })
    if (status === 0) {
      const json = JSON.parse(result)
      const fixedJson = isArray(json) ? json[0] : json
      const version = (fixedJson.dependencies || fixedJson.devDependencies)[pkg].version
      return Promise.resolve(version)
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  })).catch(() => Promise.resolve())
}
