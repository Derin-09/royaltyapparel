export default function Footer() {
  return (
    <footer className="bg-umber text-ivory py-12 select-none">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-display mb-4">Royalty Apparel</h3>
        <p className="font-body text-ocha mb-6">Showcasing elegance and style</p>
        {/* <div className="flex justify-center space-x-6">
          <a href="#" className="text-ocha hover:text-clay transition-colors">Instagram</a>
          <a href="#" className="text-ocha hover:text-clay transition-colors">Facebook</a>
          <a href="#" className="text-ocha hover:text-clay transition-colors">Twitter</a>
        </div> */}
        <p className="mt-8 text-sm text-ivory/60 font-body">© 2023 Fashion Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
