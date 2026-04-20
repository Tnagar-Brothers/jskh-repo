export function buildPath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}
