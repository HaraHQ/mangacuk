import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../components/navbar.component';
import Search from '../components/search.components';
import CardImage from '../components/card.component';
import Hero from '../components/hero.component';
import Footer from '../components/footer.component';

import useSearch from '../stores/useSearch.store';

import styles from '../styles/Home.module.css';

export default function Home() {
  const search = useSearch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Mangacuk</title>
        <meta name="description" content="Read updated manga on Mangacuk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  className="">
        <Navbar />
        <Search />
        <Hero />
        <div className="pt-4 mt-8">
          <div className="px-32">
            <div className="border-l-2 border-black pl-2">
              <div className="text-2xl font-semibold">New Manga</div>
              <div>New episode added to website</div>
            </div>
          </div>
          <div className="py-6 px-32 grid grid-cols-6 gap-6">
            {[
              1,2,3,4,5,6,7,8,9,10,11,12
            ].map(x => (
              <div key={x} className="mb-6">
                <Link href={"/read/spongbob"}>
                  <CardImage id={x} src="https://images.novel-fast.club/avatar/157x211/media/manga_covers/theres-a-ghost-within-me.png" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
