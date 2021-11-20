import Head from 'next/head'
import Banner from '../src/components/Banner'
import Header from '../src/components/Header'
import ProductFeed from '../src/components/ProductFeed'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon.com: Online Shopping for Electronics, Apparel</title>
        <meta name="description" content="Free delivery on millions of items with Prime. Low prices across earth's biggest selection of books, music, DVDs, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else." />
      </Head>
      <Header />
      <main className="w-screen bg-gray-100">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return {props: {
    products,
  }}
}