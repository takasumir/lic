import { Head } from "$fresh/runtime.ts";
import { Linkcard } from "../../components/Linkcard.tsx";

export default function Electrician2() {
  return (
    <>
      <Head>
        <title>第二種電気工事士 試験情報</title>
        <meta
          name="description"
          content="第二種電気工事士の資格取得に関する情報をまとめました。試験日程、勉強のやり方、おすすめの工具、複線図の作成方法などお役立ち情報満載です！"
        />
      </Head>
      <header class="px-4 pt-16 pb-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/electrician-2/electrician-girl-having-a-bulb.webp"
            width="1280"
            height="854"
            alt="電気工事をしている女の子"
          />
          <h1 class="text-4xl font-bold">第二種電気工事士 試験情報</h1>
          <p class="my-4">
            試験日程、勉強のやり方、おすすめの工具、複線図の作成方法など、資格取得に向けたお役立ち情報をまとめます。
          </p>
        </div>
      </header>
      <main class="max-w-screen-md mx-4 md:mx-auto py-6">
        <h1 class="text-3xl font-bold mb-2">試験日程と申込み方法</h1>
        <p>
          令和7年度(2025年)第二種電気工事士の試験日程と申込み方法を解説します。
        </p>
        <Linkcard
          url="/electrician-2/examday"
          image="/electrician-2/electrician-girl-and-calender-i.webp"
          alt="カレンダーを見る女の子のイラスト"
          title="第二種電気工事士 試験日程と受験申込み方法"
          description="2025年度(令和7年度)第二種電気工事士試験の試験日程と受験申込み方法を解説します。"
        />

        <h1 class="text-3xl font-bold mb-2">学科試験対策</h1>
        <p>
          学科試験の内容、気になる合格基準と合格率などの情報や、おすすめの参考書のご紹介です。
        </p>
        <Linkcard
          url="/electrician-2/writtenexam"
          image="/electrician-2/electrician-girl-reading-book-i.webp"
          alt="本を読んで勉強している電気工事士の女性のイラスト"
          title="第二種電気工事士 学科試験の内容と対策"
          description="第二種電気工事士の学科試験について、学科試験の概要と対策、おすすめの参考書などの情報をまとめました。"
        />

        <h1 class="text-3xl font-bold mb-2">技能試験対策</h1>
        <p>
          技能試験では、事前に公開される候補問題13問の中からいずれかが出題されます。ポイントとなる複線図の描き方や練習方法、練習に必要となる部材や工具の情報を記載します。
        </p>
        <Linkcard
          url="/electrician-2/practicalexam"
          image="/electrician-2/electrician-girl-working.webp"
          alt="電気工事をしている女性のイラスト"
          title="第二種電気工事士 技能試験の内容と対策"
          description="第二種電気工事士の技能試験の概要と対策、おすすめの工具・練習部材の情報をまとめました。"
        />
        <p>
          技能試験でポイントとなる、単線図から複線図を作成する方法を解説します。候補問題全13問に対して、それぞれ作成の流れと注意点を解説していきます。
        </p>
        <Linkcard
          url="/electrician-2/fukusenzu"
          image="/electrician-2/electrician-girl-with-drawing.webp"
          alt="電気図面を見る電気工事士の女の子のイラスト"
          title="第二種電気工事士 複線図の描き方"
          description="技能試験でポイントとなる複線図。候補問題全13問に対して、作成の流れと注意点を解説していきます。"
        />
        <p>
          工具の使用感レビューやケーブル被覆の剥き方など、技能試験でのお役立ち情報をまとめました。
        </p>
        <Linkcard
          url="/electrician-2/vvfstripper"
          image="/electrician-2/electrician-girl-having-wire-stripper.webp"
          alt="ケーブルストリッパーを持った電気工事士の女性のイラスト"
          title="【第二種電気工事士】VVFストリッパー徹底比較！技能試験におすすめは？"
          description="第二種電気工事士技能試験で一番使用頻度の高い工具、VVFストリッパーはどれを選べば良い？ワイヤーカットとのの字曲げができるマルチタイプと被覆カットと剥ぎ取りが一度にできるワンアクションタイプを比較します！"
        />
        <Linkcard
          url="/electrician-2/vvrcable"
          image="/electrician-2/electrician-girl-grab-cables.webp"
          alt="ケーブルを持った電気工事士の女の子のイラスト"
          title="【第二種電気工事士】VVRケーブルの剥き方 5つの方法を試した結果は！？"
          description="二種電気工事士技能試験の中で、電工ナイフを使った被覆剥きが必要となるVVRケーブル。施工には技術を磨く必要があります。ネット等で様々なやり方が紹介されていますが、5つの方法を解説、比較します。"
        />
      </main>
    </>
  );
}
