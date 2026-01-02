'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// Swiper imports
// @ts-ignore
import 'swiper/css/bundle'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/thumbs'

interface GalleryGridProps {
  images: string[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Chunk images into groups of 6 for each grid slide
  const chunkSize = 6
  const chunks = []
  for (let i = 0; i < images.length; i += chunkSize) {
    chunks.push(images.slice(i, i + chunkSize))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Main Gallery with Grid Slides */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {chunks.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {chunk.map((src, idx) => {
                const globalIndex = chunkIndex * chunkSize + idx
                return (
                  <div
                    key={globalIndex}
                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <Image
                      src={`https://res.cloudinary.com/dexchhhbs/image/upload/${src}`}
                      alt={`Gallery image ${globalIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Full-Screen Slider */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 text-white text-4xl hover:text-gray-300"
          >
            ×
          </button>

          {/* Main Image Slider */}
          <div className="flex-1 flex items-center justify-center px-4">
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              initialSlide={lightboxIndex}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              className="w-full max-w-5xl"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[70vh] bg-transparent">
                    <Image
                      src={`https://res.cloudinary.com/dexchhhbs/image/upload/${src}`}
                      alt={`Full view ${index + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails */}
          <div className="h-32 bg-black/90 px-8 py-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={7}
              spaceBetween={10}
              watchSlidesProgress
              modules={[Thumbs]}
              className="h-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative h-full rounded-lg overflow-hidden cursor-pointer border-4 transition-all ${
                      index === lightboxIndex ? 'border-purple-500 opacity-100' : 'border-transparent opacity-60'
                    }`}
                  >
                    {/* https://res.cloudinary.com/dexchhhbs/image/upload */}
                    <Image
                      src={`https://res.cloudinary.com/dexchhhbs/image/upload/${src}`}
                      alt={`Thumb ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}












// export default function GalleryGrid({ images }: { images: string[] }) {
//   return (
//     <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
//       {images.map((src: string, i: number) => (
//         <img
//           key={i}
//           src={src}
//           className="
//             w-full 
//             rounded-xl 
//             border-2 
//             border-ivory/20 
//             hover:border-clay 
//             transition-colors 
//             duration-300 
//             break-inside-avoid
//           "
//         />
//       ))}
//     </div>
//   );
// }













// export default function GalleryGrid({ images }: { images: string[] }) {
//   return (
//     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//       {images.map((src: string, i: number) => (
//         <div key={i} className="relative group">
//           <img
//             src={src}
//             className="w-full h-[500px] object-cover rounded-xl border-2 border-ivory/20 hover:border-clay transition-colors duration-300"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-umber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
//         </div>
//       ))}
//     </div>
//   );
// }
