import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface BoolProps {
  visible: Signal<boolean>;
}

export default function Navbar(props: CounterProps) {
  return (
    <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/electrician-2/bulb.webp"
            class="h-8"
            alt="第二種電気工事士試験サイトロゴ"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">
            実務で使える資格情報
          </span>
        </a>
        <button
          onClick={() => (props.visible.value = !props.visible.value)}
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          class={`items-center justify-between w-full ${props.visible.value ? "" : "hidden"} md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/electrician-2"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                第二種電気工事士
              </a>
            </li>
            <li>
              <a
                href="../about"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
