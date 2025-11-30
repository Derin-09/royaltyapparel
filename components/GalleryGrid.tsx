export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
      {images.map((src: string, i: number) => (
        <img
          key={i}
          src={src}
          className="
            w-full 
            rounded-xl 
            border-2 
            border-ivory/20 
            hover:border-clay 
            transition-colors 
            duration-300 
            break-inside-avoid
          "
        />
      ))}
    </div>
  );
}













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
