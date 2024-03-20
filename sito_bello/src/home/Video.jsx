export default function Video() {
  return (
    <>
      <section>
        {/* SVG Background */}
        <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            id="svg-theming-light"
            className="pointer-events-none absolute hidden w-full overflow-hidden transition-opacity duration-300 opacity-0 lg:block"
          >
            <defs>
              <linearGradient
                id="gradient-svg-theming-light"
                x1="0"
                x2="0"
                y1="1"
                y2="0"
              >
                <stop stopColor="hsl(209, 92.2%, 100%)" offset="0%"></stop>
                <stop stopColor="hsl(209, 92.2%, 92.1%)" offset="50%"></stop>
                <stop stopColor="hsl(209, 92.2%, 98%)" offset="80%"></stop>
                <stop stopColor="hsl(209, 92.2%, 100%)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient-svg-theming-light)"
              d="M 0.351 306.998 C 0.351 306.998 106.387 303.855 120.22 303.067 C 376.703 288.465 418.036 245.269 555.376 156.785 C 654.124 93.165 748.046 49.314 901.379 38.868 C 1053.87 28.479 1440.135 82.672 1440.135 82.672 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 306.998 Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            id="svg-theming-dark"
            className="pointer-events-none absolute hidden w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
          >
            <defs>
              <linearGradient
                id="gradient-svg-theming-dark"
                x1="0"
                x2="0"
                y1="1"
                y2="0"
              >
                <stop stopColor="hsl(0, 0%, 24%)" offset="0%"></stop>
                <stop stopColor="hsl(0, 0%, 19%)" offset="50%"></stop>
                <stop stopColor="hsl(0, 0%, 17%)" offset="80%"></stop>
                <stop stopColor="hsl(0, 0%, 15%)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient-svg-theming-dark)"
              d="M 0.351 306.998 C 0.351 306.998 106.387 303.855 120.22 303.067 C 376.703 288.465 418.036 245.269 555.376 156.785 C 654.124 93.165 748.046 49.314 901.379 38.868 C 1053.87 28.479 1440.135 82.672 1440.135 82.672 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 306.998 Z"
            ></path>
          </svg>
        </span>

        {/* Jumbotron */}
        <div className="px-6 py-24 lg:py-46 text-center lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mt-0 mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-5xl">
                  Not convinced yet? <br />
                  <span className="text-primary text-2xl lg:text-4xl">
                    Watch this video and find out!
                  </span>
                </h1>
              </div>
              <div className="mb-12 lg:mb-0">
                <div
                  className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    allowFullScreen
                    title="video"
                    id="240632615"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
    </>
  );
}
