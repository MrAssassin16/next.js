export class HardDeprecatedConfigError extends Error {
  constructor(
    arg: { feature: string; replacement: string; version: string } | string
  ) {
    if (typeof arg === 'object' && 'feature' in arg) {
      super(
        `The experimental feature "${arg.feature}" has been removed in Next.js ${arg.version}. Please use "${arg.replacement}" instead.`
      )
    } else {
      super(arg)
    }

    // This error is meant to interrupt the server start/build process
    // but the stack trace isn't meaningful, as it points to internal code.
    this.stack = undefined
  }
}
