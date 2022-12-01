import Image from 'next/image';
import { useEffect, useState } from 'react'

const CardImage = ({ src, id }) => {
  const [img, setImg] = useState("/placeholder.gif");
  const [loaded, setLoaded] = useState(false);
  const [bounce, setBounce] = useState(false);

  const fetchImage = async () => {
    console.log(src)
      const res = await fetch(src);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
      setLoaded(true);
  }

  useEffect(() => {
      setTimeout(() => fetchImage(), 5000)
  }, []);

  return (
      <div className={(bounce && loaded ? `bounce-sm` : ``)}>
        <div className="relative">
          {loaded ? (
            <div className="absolute bg-blue-500 text-white right-0 text-xs p-1">
              NEW ✅
            </div>
          ) : false}
          <Image
            src={img}
            alt="title"
            width={175}
            height={211}
            className={`w-full`}
            onMouseEnter={() => setBounce(true)}
            onMouseLeave={() => setBounce(false)}
          />
        </div>
        <div className="text-lg font-semibold">
          Spongebob {id === 5 ? "Superbobbobobo EP1" : false}
        </div>
      </div>
  )
}

export default CardImage;