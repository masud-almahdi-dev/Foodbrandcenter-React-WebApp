// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = ({items}) => {

    return (
        <div className='w-full p-6 mb-8'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                    //dynamicBullets: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="w-full h-[70vh] rounded-lg"
            >
                {items.map((i,index)=>{
                    return <SwiperSlide key={index} className='h-20 bg-white text-black flex'>
                        <img src={i.image} alt="" className='w-full h-full object-cover '/>
                        <div className='absolute top-full -translate-y-full p-6 flex flex-col gap-4 lg:max-w-[40%] max-w-[80%]'>
                            <h1 className='text-4xl font-bold bg-white/75 rounded-lg px-4 py-2 w-max max-w-full lg:max-w-max'>{i.title}</h1>
                            <p className='bg-white/75 rounded-lg px-4 py-2 mb-6'>{i.details}</p>
                        </div>

                        </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
}

export default Slider;