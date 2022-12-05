import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../../../components/navbar.component';
import Search from '../../../components/search.components';
import Footer from '../../../components/footer.component';

import useSearch from '../../../stores/useSearch.store';
import { useEffect, useState } from 'react';

const Slug = () => {
  const [read, setRead] = useState({
    manga: {
      title: "",
      episode: {
        total: 0,
        last: 0,
        title: null,
        previous: false,
        next: false,
      },
      info: {
        desc: "",
        category: "",
        age: 0,
        release: ""
      },
      episodes: [],
      subscribe: false,
    },
    like: 0,
    subscribe: 0
  });
  const [show, setShow] = useState(false);
  
  const search = useSearch();

  const manga = async () => {
    const data = await fetch("/api/read", {
      method: "GET",
    });    

    if (!data.error) {
      const manga = await data.json();
      setRead(manga);
      setShow(true);
    }
  }

  useEffect(() => {
    manga();
  }, []);

  return (
    <div>
      <Head>
        <title>Mangacuk - Read Sponsbobby EP 1</title>
        <meta name="description" content="Read updated manga on Mangacuk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  className="">
        <Navbar readData={show ? read : false} />
        <Search />
        <div className='mx-64 pb-64 mt-8 mx-auto shadow-inner'>
          <div>
            <div className='relative h-[340px] bg-gradient-to-r from-red-500 to-pink-500 shadow-lg'>
              <div className='absolute bottom-0 left-0 mb-4'>
                <div className='text-4xl font-semibold text-white px-4'>Sponsbobby</div>
              </div>
              <Image src={'/image.png'} width={180} height={120} alt={'Sponsbobby'} className="absolute right-0 bottom-0 mr-4" />
            </div>
          </div>
          <div className='p-4'>
            <div className='text-2xl font-semibold'>Description:</div>
            <div className='text-lg'>{read?.manga?.info?.desc}</div>
          </div>
          <div className='p-4 mt-4'>
            <div className='text-2xl font-semibold mb-4'>Episodes:</div>
            <div className='grid grid-cols-2 gap-8'>
              <div className='p-3 ring ring-slate-200 hover:ring-red-400 rounded-lg'>
                <Link href={'sponsbobby/1'}>
                  <div className='text-lg hover:font-semibold cursor-pointer'>EP1 - Wkwkwkwkwk</div>
                  <div className='text-sm'>2 Week ago</div>
                </Link>
              </div>
              <div className='p-3 ring ring-slate-200 hover:ring-red-400 rounded-lg'>
                <Link href={'sponsbobby/2'}>
                  <div className='text-lg hover:font-semibold cursor-pointer'>EP2 - Wkwkwkwkwk</div>
                  <div className='text-sm'>2 Week ago</div>
                </Link>
              </div>
              <div className='p-3 ring ring-slate-200 hover:ring-red-400 rounded-lg'>
                <Link href={'sponsbobby/3'}>
                  <div className='text-lg hover:font-semibold cursor-pointer'>EP3 - Wkwkwkwkwk</div>
                  <div className='text-sm'>2 Week ago</div>
                </Link>
              </div>
            </div>
          </div>
          <div className='p-4 mt-4'>
            <div className='mx-auto w-64'>
              <div className='bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-center h-10 text-lg cursor-pointer flex items-center justify-center'>
                👀 Load More
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Slug;