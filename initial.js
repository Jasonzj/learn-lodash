const initial = (arr) => (
  Array.isArray(arr) 
    ? arr.slice(0, -1) 
    : []
)