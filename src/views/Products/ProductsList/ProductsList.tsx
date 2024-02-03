import { ProductType } from '@src/@types/types'
import ProductCard from '@src/components/ProductCard/ProductCard'

interface ProductsListProps {
    products: ProductType[]
}

export default function ProductsList({products} : ProductsListProps) {
    
    const productCards = products.map((prod:ProductType)=> {
        return <ProductCard key={prod.id} product={prod}/>
    })

    return (
        <div className=' w-full lg:w-[800px] grid grid-cols-3 xl:grid-cols-4 gap-6 ml-auto'>{productCards}</div>
    )
}
