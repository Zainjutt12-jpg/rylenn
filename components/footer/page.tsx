
export default function Footer(){
    return (
<footer className="bg-white text-black font-lato px-6 py-16 mt-20 border-t border-gray-200">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
    
    {/* Paragraph Section */}
    <div className="flex-1">
      <h2 className="text-xl font-light mb-3 tracking-wide uppercase">About Rylenn</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Fashion is our language — timeless, bold, and unapologetically modern. At Rylenn, we craft stories through fabric that redefine everyday elegance.
      </p>
    </div>

    {/* Newsletter Subscription */}
    <div className="flex-1">
      <h2 className="text-xl font-light mb-3 tracking-wide uppercase">Stay in the loop</h2>
      <p className="text-gray-600 text-base mb-5">
        Be the first to know about new drops, exclusive offers, and the stories behind our pieces.
      </p>
      <form className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-3 rounded-full w-full sm:w-[280px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400 text-sm"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-12 text-center text-xs text-gray-400 tracking-wider">
    &copy; {new Date().getFullYear()} Rylenn. All rights reserved.
  </div>
</footer>
    )
}