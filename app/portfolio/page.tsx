import GalleryGrid from "@/components/GalleryGrid";

export default function Portfolio() {
  const images = [
    "/images/look1.jpg",
    "/images/look2.jpg",
    "/images/look3.jpg",
    "/images/look4.jpg",
    "/images/look5.jpg",
  ];

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
  {images.map((src, i) => (
    <img
      key={i}
      src={src}
      className="rounded-xl w-full object-cover break-inside-avoid shadow-lg hover:opacity-90 transition"
    />
  ))}
</div>

  );
}
