// app/gallery/page.tsx or components/GalleryWithCloudinary.tsx
import GalleryGrid from '@/components/GalleryGrid'
import CloudinaryImageFetcher from '@/components/CloudinaryImageFetcher'
// import Loading from '@/app/loading'

export default async function GalleryWithCloudinary() {



  const images = [
  '1767278037095_m97aol',
  '1767278037154_e0sn4p',
  '1767278036625_dzvo61',
  '1767278036742_danwez',
  'pic5_h9hfqg',
  'pic3_lokcne',
  
  '1767278036799_bu5mo7',
  '1767278036919_lupohj',
  '1767278037291_dl3iap',
  '1767278037035_aixjub',
  '1767278036569_z1jyf1',
  '1767278037215_j2hwkt',
  'pic6_x7a8vp',
  '1767278036977_ilc39t',
  // '1767278036681_d5z6xd',
  '1767278036861_ngjvty',
  'pic4_e57flx',
  'pic1_dn9xri',
  'pic2_j014zj',
]



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









