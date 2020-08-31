import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { GetServerSideProps } from 'next'
import { initializeStore, useStore, AppDispatch } from '../redux/store'
import { fetchProducts, FeedState } from '../redux/slices/feed'
import { RootState } from '../redux/reducer';
import ProductCard from '../components/productCard';
import { addToCart } from '../redux/slices/cart';
import Cart from '../components/cart';


function Home() {

  const products = useSelector((state: RootState) => state.feed.products);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
      <main className={styles.main}>
        {
          products.map((product, key) => {
            return (
              <ProductCard
                key={key}
                onProductClickCb={() => dispatch(addToCart(product))}
                {...product}
              />
            )
          })
        }
      </main>

    </div>
  )
}

export async function getServerSideProps(context: GetServerSideProps) {

  const store = initializeStore({});
  await store.dispatch(fetchProducts());
  return {
    props: {
      initialReduxState: store.getState()
    },
  }
}

export default Home;