export function parseRoutePath(path) {
  const routParametersRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(routParametersRegex, "(?<$1>[a-z0-9-_]+)");

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

  return pathRegex
}
