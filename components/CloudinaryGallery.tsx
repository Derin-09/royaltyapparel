// app/gallery/page.tsx or components/GalleryWithCloudinary.tsx
import GalleryGrid from '@/components/GalleryGrid'
import CloudinaryImageFetcher from '@/components/CloudinaryImageFetcher'
// import Loading from '@/app/loading'

export default async function GalleryWithCloudinary() {
//   const images = await CloudinaryImageFetcher()

// const images = [
//     'fashionweb/1767278036799_bu5mo7',
//     "fashionweb/1d1f361ae9e8d8f58202a13fb40e3200","fashionweb/56c0e058f531c8daff17c8119b6d707e","fashionweb/e1c0c1761a3ee61acdaff4f5fc0b00b9","fashionweb/fde3271e81ba8317ca8b92c22e886be1","fashionweb/3fb830dffb0d20d887b1cb113828bb28","fashionweb/c1aeedfea3623e8b328dc91fe3d9b121","fashionweb/66f50b698502f2d2c85959610082c84b","fashionweb/9be3ca34eeb0290cecfcecfe576093ef","fashionweb/b860c4ce9e15ed271cdfe17eeb9ba751","fashionweb/5641307a72214833e31b8602df1978f9","fashionweb/3bb5adddbee868c7923869ed3ce6d39c","fashionweb/fdfa03cb608e031845df62ba9642ce50","fashionweb/8bc01e26ac7b2e82c55f0d77471058f3","fashionweb/73546174fcf852c32edf280e8f4805b0","fashionweb/03491e83022ba2ea4f3961f41afaefe5","fashionweb/e7211608463ce969edd3865ff3836188","fashionweb/242d0f62fd70fcc8c7691af5d9bcd307","fashionweb/1c41164de584983bcbc7d699ef3f79b7","fashionweb/ff141d6f46b8b82d7da53a869df31d19","fashionweb/d03180cab237b3078d640ee6fb6d9fda",
// ]


const images = [
  '1767278036799_bu5mo7',
  '1767278037291_dl3iap',
  '1767278037035_aixjub',
  '1767278036977_ilc39t',
  '1767278036681_d5z6xd',
  '1767278036861_ngjvty',
  '1767278036625_dzvo61',
  '1767278036569_z1jyf1',
  '1767278037095_m97aol',
  '1767278037154_e0sn4p',
  '1767278036742_danwez',
  '1767278036919_lupohj',
  '1767278036508_xsgq94',
  '1767278037215_j2hwkt',
  'pic4_e57flx',
  'pic1_dn9xri',
  'pic5_h9hfqg',
  'pic6_x7a8vp',
  'pic3_lokcne',
  'pic2_j014zj',
]



// const images = [
//     '/fashionweb/1767278036799_bu5mo7',
//     "/fashionweb/1d1f361ae9e8d8f58202a13fb40e3200","/fashionweb/56c0e058f531c8daff17c8119b6d707e","/fashionweb/e1c0c1761a3ee61acdaff4f5fc0b00b9","/fashionweb/fde3271e81ba8317ca8b92c22e886be1","/fashionweb/3fb830dffb0d20d887b1cb113828bb28","/fashionweb/c1aeedfea3623e8b328dc91fe3d9b121","/fashionweb/66f50b698502f2d2c85959610082c84b","/fashionweb/9be3ca34eeb0290cecfcecfe576093ef","/fashionweb/b860c4ce9e15ed271cdfe17eeb9ba751","/fashionweb/5641307a72214833e31b8602df1978f9","/fashionweb/3bb5adddbee868c7923869ed3ce6d39c","/fashionweb/fdfa03cb608e031845df62ba9642ce50","/fashionweb/8bc01e26ac7b2e82c55f0d77471058f3","/fashionweb/73546174fcf852c32edf280e8f4805b0","/fashionweb/03491e83022ba2ea4f3961f41afaefe5","/fashionweb/e7211608463ce969edd3865ff3836188","/fashionweb/242d0f62fd70fcc8c7691af5d9bcd307","/fashionweb/1c41164de584983bcbc7d699ef3f79b7","/fashionweb/ff141d6f46b8b82d7da53a869df31d19","/fashionweb/d03180cab237b3078d640ee6fb6d9fda",
// ]

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-4">No images found</p>
          {/* <p className="text-sm text-gray-600">Check your Cloudinary folder name and credentials</p> */}
        </div>
      </div>
    )
  }

  return <GalleryGrid images={images} />
}












// // components/CloudinaryGallery.tsx
// import { CldImage } from 'next-cloudinary'
// // import { AdvancedImage } from '@cloudinary/react'
// import { Cloudinary } from '@cloudinary/url-gen'

// export default async function CloudinaryGallery() {
//   // Server Component — fetch on the server
//   const response = await fetch(
//     `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=FASHIONWEBSITE&max_results=100`,
//     {
//       headers: {
//         Authorization: `Basic ${btoa(
//           process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET
//         )}`,
//       },
//     }
//   )

//   const data = await response.json()
//   const images = data.resources || []

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {images.map((image: any) => (
//         <div key={image.public_id} className="relative aspect-square rounded-lg overflow-hidden">
//           <CldImage
//             width="400"
//             height="400"
//             src={image.public_id}
//             alt={image.public_id.split('/').pop()}
//             crop="fill"
//             className="object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   )
// }