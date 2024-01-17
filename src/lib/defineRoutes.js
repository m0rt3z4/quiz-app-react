/**
 * Flattens a nested object of route definitions into a single-level object
 * where each key represents a unique route path and each value represents
 * the corresponding URL path.
 *
 */
export function flattenRoute(data, assign) {
  const path = assign ? data.path ?? '/' : data.path
  const { children, key, hide } = data

  const flatten = {
    key,
    hide,
    path,
    get: (params) => {
      if (!path) return ''
      const injectedPath = path.replace(/\[(\w+)]/g, (_, key) =>
        String(params[key])
      )
      return injectedPath
    },
  }

  if (children) {
    for (const child of children) {
      if (assign) {
        const assignedPath = `${path}${child.path ?? ''}`.replace(/\/+/g, '/')
        Object.assign(child, { path: assignedPath })
      }

      Object.assign(flatten, {
        [child.key]: flattenRoute(child, assign),
      })
    }
  }

  return flatten
}

export function flattenRoutes(data, assign) {
  return Object.fromEntries(
    data.map((route) => {
      return [route.key, flattenRoute(route, assign)]
    })
  )
}

export function defineRoutes(data) {
  return {
    collection: data,
    hierarchy: Object.freeze(flattenRoutes(data, true)),
  }
}
