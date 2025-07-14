import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "../islands/Navbar.tsx";
import { Linkcard } from "../components/Linkcard.tsx";

export default function AboutPage() {
  const visible = useSignal(false);
  return (
    <>
      <Head>
        <title>このサイトについて</title>
        <meta
          name="description"
          content="資格を取ってスキルアップ、キャリアアップを目指したい社会人のために、実務で役立つ資格の情報まとめサイト、「実務で資格情報」サイトについての情報です。"
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
          <h1 class="text-4xl font-bold">このサイトについて</h1>
        </div>
      </header>
      <main class="max-w-screen-md mx-2 md:mx-auto py-6">
        <h2 class="text-2xl font-bold mb-2">
          このサイト「実務で使える資格情報」の目的
        </h2>
        <p class="mb-4">
          資格を取ってスキルアップ、キャリアアップを目指したい社会人のために、実務で役立つ資格の情報まとめサイトです。筆者が実際に資格を取得した経験をもとに、資格取得に向けた勉強法やおすすめの書籍などもご紹介します。
        </p>
        <h2 class="text-2xl font-bold mb-2">著者について</h2>
        <div class="mb-4 mx-auto max-w-sm min-w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            class="rounded-t-lg h-80 object-cover"
            src="sumic.webp"
            alt="電気工事をするクマ"
            width="1024"
            height="1024"
          />
          <div class="p-5">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Sumic
            </h3>
            <p class="mb-3 font-normal text-gray-700">
              技術者として働いています。第二種電気工事士、機械・プラント製図
              機械製図CAD作業1級
            </p>
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-2">Amazonアソシエイトについて</h2>
        <p>
          このサイトには、Amazonで取り扱う商品へのリンクを設置しています。Amazonのアソシエイトとして、このサイトの著者Sumicは適格販売により収入を得ています。
        </p>
      </main>
    </>
  );
}
