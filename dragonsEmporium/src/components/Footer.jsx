import { DragonLogo } from "./Navbar.jsx";

function FooterLink({ value, link }) {
  return (
    <li class="mb-4 text-white">
      <a href={link} class="hover:underline">
        {value}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer class="bg-slate-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="hidden lg:flex mb-6 md:mb-0">
            <DragonLogo />
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-bold lg:font-semibold text-white uppercase ">
                Resources
              </h2>
              <ul class="text-white font-medium">
                <FooterLink value="Docs" link="#"/>
                <FooterLink value="Patterns" link="#"/>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-bold lg:font-semibold text-white uppercase ">
                Support Us
              </h2>
              <ul class="text-white font-medium">
                <FooterLink value="Buy us RAM" link="#" />
                <FooterLink value="Merch" link="#" />
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-bold lg:font-semibold text-white uppercase ">
                Contacts
              </h2>
              <ul class="text-white font-medium">
                <FooterLink value="Email us" link="#" />
                <FooterLink value="Customer support" link="#" />
              </ul>
            </div>
          </div>
        </div>
        <hr class="text-grigino my-6 sm:mx-auto lg:my-8" />
        <div class="flex-cols text-center lg:flex justify-between">
          <span class="text-sm text-grigino">
            2024{" "}
            <a href="/" class="hover:underline">
              Dragon's Emporium.
            </a>
          </span>
          <div class="flex relative left-7 lg:left-0  mt-4 lg:mt-0">
            {/*DISCORD*/}
            <a
              href="https://discord.gg/vWcnNUQtxM"
              class="text-white hover:text-blackk ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span class="sr-only">Discord community</span>
            </a>
            {/*TWITTER*/}
            <a href="#" class="text-white hover:text-blackk ms-5">
              <svg
                className="w-4 h-4"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="currentColor"
                />
              </svg>

              <span class="sr-only">Twitter page</span>
            </a>
            {/*GITHUB*/}
            <a href="#" class="text-white hover:text-blackk ms-5">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            {/*INSTAGRAM*/}
            <a href="#" class="text-white hover:text-blackk ms-5">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                fill="currentColor"
              >
                <path
                  class="cls-1"
                  d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                  transform="translate(-2.5 -2.5)"
                  fill="currentColor"
                />
              </svg>
              <span class="sr-only">Instagram account</span>
            </a>
            {/*REDDIT*/}
            <a href="#" class="text-white hover:text-blackk ms-5">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 500 2000 600"
                fill="currentColor"
              >
                <path
                  class="cls-1"
                  d="m296.06,192.35l-45.61,108.45c-5.75-2.87-19.39-6.11-32.32-6.11s-25.86,3.23-38.42,9.34c-24.78,12.57-43.1,37.71-43.1,73.98v198.59H23.13V190.2h110.25v54.23h2.15c25.86-34.48,65.36-59.97,116.71-59.97,18.67,0,36.63,3.59,43.81,7.9Z"
                />
                <path
                  class="cls-1"
                  d="m274.1,384.48c0-111.69,76.49-200.03,191.05-200.03,103.79,0,178.12,75.77,178.12,182.43,0,18.67-1.8,36.27-5.74,53.15h-260c11.85,40.58,47.04,72.18,99.83,72.18,29.09,0,70.39-10.42,92.65-27.65l35.2,84.75c-32.68,22.27-82.6,33.04-126.41,33.04-122.46,0-204.7-79.01-204.7-197.87Zm101.27-35.56h163.4c0-49.56-33.76-75.77-75.06-75.77-46.68,0-78.29,30.17-88.34,75.77Z"
                />
                <path
                  class="cls-1"
                  d="m1617.09,16.58c38.07,0,69.31,31.24,69.31,69.31s-31.24,69.31-69.31,69.31-69.31-31.24-69.31-69.31,31.24-69.31,69.31-69.31Zm56.74,560.03h-113.48V190.2h113.48v386.41Z"
                />
                <path
                  class="cls-1"
                  d="m958.18,23.57l-.36,203.26h-2.15c-31.24-29.81-65-42.02-109.17-42.02-108.81,0-180.99,87.62-180.99,198.59s67.51,198.95,177.4,198.95c45.97,0,89.42-15.8,117.43-51.71h3.23v45.97h108.09V23.57h-113.48Zm5.4,460.92h-3.75l-25.32-26.32c-16.48,16.45-39.05,26.32-65.38,26.32-55.59,0-94.46-43.96-94.46-101s38.87-101,94.46-101,94.46,43.96,94.46,101v101Z"
                />
                <path
                  class="cls-1"
                  d="m1391.6,23.56l-.36,203.26h-2.15c-31.24-29.81-65-42.02-109.17-42.02-108.81,0-180.99,87.62-180.99,198.59s67.51,198.95,177.4,198.95c45.97,0,89.42-15.8,117.43-51.71h3.23v45.97h108.09V23.56h-113.48Zm4.86,460.92h-3.75l-25.32-26.32c-16.48,16.45-39.05,26.32-65.38,26.32-55.59,0-94.46-43.96-94.46-101s38.87-101,94.46-101,94.46,43.96,94.46,101v101Z"
                />
                <path
                  class="cls-1"
                  d="m1893.91,190.2h82.96v96.6h-82.96v289.81h-113.48v-289.81h-82.6v-96.6h82.6v-105.04h113.48v105.04Z"
                />
              </svg>
              <span class="sr-only">Reddit account</span>
            </a>
            {/*YOUTUBE*/}
            <a
              href="https://www.youtube.com/@Dragon-s-Emporium"
              class="text-white hover:text-blackk ms-5"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 -3 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g transform="translate(-300.000000, -7442.000000)">
                  <g transform="translate(56.000000, 160.000000)">
                    <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"></path>
                  </g>
                </g>
              </svg>
              <span class="sr-only">Youtube</span>
            </a>
            {/*TIKTOK*/}
            <a href="#" class="text-white hover:text-blackk ms-5">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 347.67 398.67"
                fill="currentColor"
              >
                <path
                  class="cls-1"
                  d="M295.74,79.91c-21.48-14-36.97-36.41-41.81-62.52-1.04-5.64-1.62-11.45-1.62-17.39h-68.54l-.11,274.68c-1.15,30.76-26.47,55.45-57.5,55.45-9.65,0-18.73-2.41-26.73-6.62-18.34-9.65-30.89-28.87-30.89-50.99,0-31.77,25.85-57.62,57.61-57.62,5.93,0,11.62,.98,17,2.66v-69.97c-5.57-.76-11.23-1.23-17-1.23C56.59,146.36,0,202.95,0,272.52c0,42.68,21.32,80.45,53.86,103.29,20.49,14.39,45.42,22.86,72.3,22.86,69.56,0,126.15-56.59,126.15-126.15V133.23c26.88,19.29,59.82,30.66,95.36,30.66V95.35c-19.14,0-36.97-5.69-51.93-15.44Z"
                />
              </svg>
            </a>
            {/*TELEGRAM*/}
            <a href="#" class="text-white hover:text-blackk ms-5">
              <svg
                className="w-6 h-6"
                viewBox="100 130 1000 1000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                  id="Path-3"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">Telegram</span>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
