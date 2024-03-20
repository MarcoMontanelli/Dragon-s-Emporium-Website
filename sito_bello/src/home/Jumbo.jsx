import Carousel from "../components/Carousel";

export default function Jumbo() {
  const slides = [
    "../src/assets/img1.JPG",
    "../src/assets/img2.JPG",
    "../src/assets/img3.jpg",
    "../src/assets/img4.jpg",
  ];
  return (
    <section class="bg-center relative">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-80">
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Your favourite place to bring your characters and creations to life.
        </h1>
        <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          Whether you have a project of your own, or something you’ve always
          wanted to have, we’re here to make that wish come true.
        </p>
        <div class="flex flex-col space-y-4 lg:flex-row justify-center sm:space-y-0">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-parpol hover:bg-electric-violet focus:ring-4 focus:ring-electric-violet"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border border-white hover:bg-electric-violet focus:ring-4 focus:ring-electric-violet"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
