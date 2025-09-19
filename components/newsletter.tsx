export default function Newsletter() {
  return (
    <section className="relative bg-stone-800 py-10 md:py-16" data-aos="fade-up">
      <div className="relative px-4 md:px-40 ">
        <div className="relative grid sm:grid-cols-1 md:grid-cols-12 grid-rows-1 gap-20 flex-wrap items-center">
          {/* CTA content */}
          <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-1">
            <h3 className="h3 text-white mb-2">Stay in the loop</h3>
            <p className="text-gray-100 text-lg">Join our newsletter to get top news before anyone else.</p>
          </div>

          {/* CTA form */}
          <form className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-7">
            <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
              <input
                type="email"
                className="w-full appearance-none bg-gray-100 border border-gray-300 focus:border-amber-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-stone-800 font-notosans"
                placeholder="Your best email…"
                aria-label="Your best email…"
              />
              <a className="btn text-gray-100 bg-amber-600 hover:bg-amber-800 shadow font-notosans text-base" href="#0">
                Subscribe
              </a>
            </div>
            {/* Success message */}
            {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
          </form>
        </div>
      </div>
    </section>
  );
}
