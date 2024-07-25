import React from 'react'

interface Props {
    params: {slug: string[]}
}

const ProductPage = ({params: {slug}} : Props) => {
  if (!slug) return <div>Product Page </div>

  return (
    <div>
        {slug.map((parameter) => <p key={parameter}>{parameter}</p>)}
    </div>
  )
}

export default ProductPage