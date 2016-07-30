import React from 'react'

export default ({ id, name, children }) =>
  <article>
    <p>{name}</p>
    {children}
  </article>

