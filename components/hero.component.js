import Carousel from 'nuka-carousel';

const Hero = () => {
  return (
    <Carousel adaptiveHeight>
      <div className="relative">
        <div className="absolute bottom-48 left-32">
          <div className="text-3xl bg-black text-white p-4">
            Welcome to MangaCUK
          </div>
        </div>
        <img src={"/hero1.png"} className="w-full h-auto" alt="hero1" />
      </div>
      <div className="relative">
        <div className="absolute bottom-48 left-32">
          <div className="text-3xl bg-black text-white p-4">
            Register Now
          </div>
        </div>
        <img src={"/hero2.png"} className="w-full h-auto" alt="hero1" />
      </div>
    </Carousel>
  )
}

export default Hero;