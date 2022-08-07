import { useState } from 'react'
import { ProductItem } from '../components/ProductItem'
import products from '../data/products.json'

export function Products() {

    return (
        <>
            <h1>All Products</h1>

            <section className='flex flex-col items-center md:flex-row justify-center flex-wrap gap-3'>
                {products.map(product => (
                    <div key={product.id}>
                        <ProductItem {...product} />
                    </div>
                ))}
            </section>
        </>
    )
}