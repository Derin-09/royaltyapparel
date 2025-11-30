type HeroType = {
  title: string;
  subtitle: string;
  image: string;
}


export default function Hero({ title, subtitle, image }: HeroType) {
  // console.log('whats up')
  return (
    <div className="relative h-[100vh] w-full overflow-hidden select-none">
      
      <img
        src={image}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-ebony/50 backdrop-blur-[1px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl  md:text-7xl font-display text-ivory drop-shadow-xl tracking-tight">
          {title}
        </h1>

        <p className="mt-6 text-lg md:text-xl md:text-2xl max-w-2xl text-ivory/90 font-body leading-relaxed">
          {subtitle}
        </p>

        <button className="mt-10 px-8 py-4 bg-ocha text-ebony font-bold rounded-full hover:bg-clay transition">
          <a href="#portfolio">
          Explore Styles
          </a>
        </button>
      </div>
    </div>
  );
}













// export default function Hero({ title, subtitle, image }) {
//   return (
//     <div className="relative h-[80vh] w-full flex items-center justify-center bg-black text-white">
//       <img
//         src={image}
//         className="absolute inset-0 h-full w-full object-cover opacity-40"
//       />
//       <div className="relative z-10 text-center space-y-4 px-4">
//         <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
//         <p className="text-xl max-w-xl mx-auto opacity-90">{subtitle}</p>
//       </div>
//     </div>
//   );
// }
