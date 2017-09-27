const fromPairs = pairs => {
  if (!Array.isArray(pairs)) {
    return {}
  }

  const result = {}
  pairs.forEach(pair => result[pair[0]] = pair[1])
  return result
}