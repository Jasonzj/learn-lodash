const intersection = (...arrs) => 
  arrs.reduce((pre, cur) =>
      arrs[0].filter((item) => 
          cur.includes(item) && pre.includes(item)
      )
  )
