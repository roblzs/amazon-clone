import Product from "./Product"

function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-32 content-center md:px-10 xl:px-36">
            {products.map(({id, title, price, description, category, image}) => {
                if(category === "men's clothing"){
                    return(
                        <Product 
                            key={id}
                            id={id} 
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    )
                }
            })}
            <img className="md:col-span-full cursor-pointer" src="/amazon-advert.jpg" alt="advert" />
            {products.map(({id, title, price, description, category, image}) => {
                if(category === "electronics"){
                    return(
                        <Product 
                            key={id}
                            id={id} 
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    )
                }
            })}
            {products.map(({id, title, price, description, category, image}) => {
                if(category === "jewelery"){
                    return(
                        <Product
                            key={id}
                            id={id} 
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    )
                }
            })}
            {products.map(({id, title, price, description, category, image}) => {
                if(category === "women's clothing"){
                    return(
                        <Product 
                            key={id}
                            id={id} 
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    )
                }
            })}
        </div>
    )
}

export default ProductFeed
