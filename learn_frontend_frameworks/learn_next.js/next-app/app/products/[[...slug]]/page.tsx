import React from 'react'

interface Props {
    params: {slug: string[]};
    searchParams: {sortOrder: string}
}

const ProductPage = ({params: {slug}, searchParams: {sortOrder}} : Props) => {
  if (!slug) return <div>Product Page </div>

  return (
    <div>
        {slug.map((parameter) => <p key={parameter}>{parameter} {sortOrder}</p>)}
    </div>
  )
}

export default ProductPage