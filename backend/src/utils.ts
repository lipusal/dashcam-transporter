import { statfsSync } from 'fs'
import { Settings } from './Settings'

export const sleep = async (delayMs: number) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, delayMs)
  })
}

export const enoughSpaceAvailable = async (requestedBytes: number) => {
  const alwaysFreeSpace = 100 * 1024 * 1024 // 100MB
  // Based on https://stackoverflow.com/a/75578092
  const result = statfsSync(await Settings.getDownloadDirectory())
  return ((result.bsize * result.bavail) - requestedBytes - alwaysFreeSpace) > 0
}
