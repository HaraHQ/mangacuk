import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../../../components/navbar.component';
import Search from '../../../components/search.components';
import Footer from '../../../components/footer.component';

import useSearch from '../../../stores/useSearch.store';
import { useEffect, useState } from 'react';

const SlugRead = () => {
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
        <Navbar readNav={true} readData={show ? read : false} />
        <Search />
        <div className='mx-64 mt-8 flex justify-between items-center'>
          <div className='text-2xl font-semibold'>{read?.manga?.title}</div>
          <div className='flex'>
            <div className='bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded-md cursor-pointer select-none'>Prev</div>
            <select className='text-lg px-8 mx-2 border-2 rounded-md'>
              <option>EP1</option>
              <option>EP2</option>
              <option>EP3</option>
            </select>
            <div className='bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded-md cursor-pointer select-none'>Next</div>
          </div>
        </div>
        <div className='mb-16'>
          <div className='mx-64 mt-8 mx-auto shadow-md'>
            <div className='relative w-full'>
              <Image
                src={'/demo/1.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className='relative w-full'>
            <Image
                src={'/demo/2.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SlugRead;