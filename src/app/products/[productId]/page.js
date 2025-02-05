import React from 'react'

const  dynamicProductPage =async({params,searchParams}) =>{
  const productId = await params.productId;
  console.log(productId);
  console.log(await searchParams);
  return (
    <div>this is dynamicProductPage {productId}</div>
  )
}

export default dynamicProductPage