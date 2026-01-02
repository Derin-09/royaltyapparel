// components/CloudinaryImageFetcher.tsx
export default async function CloudinaryImageFetcher() {
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const API_KEY = process.env.CLOUDINARY_API_KEY
  const API_SECRET = process.env.CLOUDINARY_API_SECRET
  const FOLDER = 'fashionweb/' // Change to your folder

  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    return <div className="text-center py-10 text-red-400">Missing Cloudinary credentials</div>
  }

  try {
    const response = await fetch(
    //   `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?prefix=${FOLDER}&max_results=500`,
    
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?type=upload&prefix=${FOLDER}&max_results=500`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`,
        },
        // next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) throw new Error('Failed to fetch')
    console.log('resss', response)

    const data = await response.json()
    console.log('dattt', data)
    const imageUrls = data.resources.map((img: any) => img.secure_url)

    return imageUrls
  } catch (error) {
    console.error('Cloudinary fetch error:', error)
    return []
  }
}