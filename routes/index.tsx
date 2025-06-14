import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  const visible = useSignal(false);
  return (
    <>
      <Head>
        <title>実務で使える資格情報</title>
        <meta
          name="description"
          content="資格を取ってスキルアップ、キャリアアップを目指したい社会人のために、実務で役立つ資格の情報まとめサイトです。資格取得に向けた勉強法やおすすめの書籍などもご紹介します。"
        />
      </Head>
      <Navbar visible={visible} />
      <header class="px-4 pt-16 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6 w-80"
            src="girl-having-licence.webp"
            width="1024"
            height="1024"
            alt="ライセンスカードを持った女の子"
          />
          <h1 class="text-4xl font-bold">実務で使える資格情報</h1>
          <p class="my-4">
            資格を取ってスキルアップ、キャリアアップを目指したい社会人のために、実務で役立つ資格の情報まとめサイトです。資格取得に向けた勉強法やおすすめの書籍などもご紹介します。
          </p>
        </div>
      </header>
      <main class="max-w-screen-md mx-2 md:mx-auto py-6 flex justify-around flex-wrap">
        <article class="my-2 max-w-sm min-w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
          <a
            href="electrician-2"
            aria-label="第二種電気工事士試験情報へのリンク"
          >
            <img
              class="rounded-t-lg h-80 object-cover"
              src="electrician-2/electrician-girl-having-a-bulb.webp"
              alt="電球を持った電気工事士の女の子"
              width="1024"
              height="1024"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                第二種電気工事士 試験情報
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
              第二種電気工事士の資格取得に関する情報をまとめました。試験日程、勉強のやり方、おすすめの工具、複線図の作成方法などお役立ち情報満載です！
            </p>
            <a
              href="electrician-2"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
          </div>
        </article>
        <article class="my-2 max-w-sm min-w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
          <a href="#" aria-label="Coming soon...">
            <img
              class="rounded-t-lg h-80 object-cover"
              src="girl-drawing.webp"
              alt="図面を描いている女の子"
              width="1024"
              height="1024"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                機械製図・プラント製図 機械製図CAD作業２級
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
              機械製図・プラント製図
              機械製図CAD作業２級に関する試験情報をまとめています（準備中）
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-300 rounded-lg"
            >
              Coming Soon...
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
          </div>
        </article>
        <article class="my-2 max-w-sm min-w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
          <a href="#" aria-label="Coming soon...">
            <img
              class="rounded-t-lg h-80 object-cover"
              src="girl-drawing2.webp"
              alt="図面を描いている女の子"
              width="1024"
              height="1024"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                機械製図・プラント製図 機械製図CAD作業１級
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
              機械製図・プラント製図
              機械製図CAD作業１級に関する試験情報をまとめています（準備中）
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-300 rounded-lg"
            >
              Coming Soon...
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
          </div>
        </article>
      </main>
    </>
  );
}
