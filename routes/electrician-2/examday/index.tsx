import { Head } from "$fresh/runtime.ts";
import { Linkcard } from "../../../components/Linkcard.tsx";

export default function Examday() {
  const css = `
  ul.arrowlist li {
  display: table;
  width: 16em;
    margin: 2em auto;
    position: relative;
    box-sizing: border-box;
    padding: 0.8em 3em;
    border: 3px solid #e8e8e8;
    background-color: #e2fceb;
    border-radius: 0.2em;
    text-align: center;
  }
  ul.arrowlist li:not(:last-child) {
    margin-bottom: 1.5em;
  }
  ul.arrowlist li:not(:last-child):after {
    position: absolute;
    left: 50%;
    bottom: -1.2em;
    margin-bottom: 0.1em;
    content: '';
    width: 1em;
    height: 1em;
    border: 4px solid;
    border-color: transparent transparent #565656 #565656;
    transform: translateX(-50%) rotate(-45deg);
  } `;
  return (
    <>
      <Head>
        <title>第二種電気工事士 試験日程と受験申込み方法</title>
        <meta
          name="description"
          content="2025年度(令和7年度)第二種電気工事士試験の試験日程と受験申込み方法を解説します。"
        />
      </Head>
      <head>
        <style>{css}</style>
      </head>
      <header className="px-4 pt-16 pb-8 mx-auto bg-[#86efac]">
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            className="my-6"
            src="/electrician-2/electrician-girl-and-calender.webp"
            width="1280"
            height="854"
            alt="カレンダーを見る女性のイラスト"
          />
          <h1 className="text-4xl font-bold">
            第二種電気工事士
            <br />
            試験日程と受験申込み方法
          </h1>
        </div>
      </header>
      <main className="max-w-screen-md mx-4 md:mx-auto py-6">
        <p className="mb-4">
          2025年度(令和7年度)第二種電気工事士試験の試験日程と受験申込み方法を解説します。
        </p>
        <h2 className="text-2xl font-bold mb-2">資格取得までの流れ</h2>
        <p className="mb-1">
          第二種電気工事士試験は上期と下期に各1回、年2回行われます。申し込みから資格取得までの一般的な流れは下図のようになります。
        </p>
        <ul className="arrowlist">
          <li>受験申込</li>
          <li>学科試験</li>
          <li>合格</li>
          <li>技能試験</li>
          <li>合格</li>
          <li>免状申請</li>
          <li>免状交付</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">試験日程</h2>
        <p>試験日程は下記の通りです。</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
          <table class="w-full text-left rtl:text-right">
            <thead class="text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  項目
                </th>
                <th scope="col" class="px-6 py-3">
                  上期試験
                </th>
                <th scope="col" class="px-6 py-3">
                  下期試験
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">申込期間</td>
                <td class="px-6 py-4">
                  3月17日(月)
                  <br />
                  〜4月7日(月)
                </td>
                <td class="px-6 py-4">
                  8月18日(月)
                  <br />
                  〜9月4日(木)
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">CBT方式学科試験</td>
                <td class="px-6 py-4">
                  4月21日(月)
                  <br />
                  〜5月8日(木)
                </td>
                <td class="px-6 py-4">
                  9月19日(金)
                  <br />
                  〜10月6日(月)
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">筆記方式学科試験</td>
                <td class="px-6 py-4">5月25日(日)</td>
                <td class="px-6 py-4">10月26日(日)</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">
                  試験結果の発表
                  <br />
                  (Web公表)
                </td>
                <td class="px-6 py-4">未公表</td>
                <td class="px-6 py-4">未公表</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">技能試験</td>
                <td class="px-6 py-4">
                  7月19日(土)
                  <br />
                  <span style="font-size: smaller">または</span>
                  7月20日(日)
                </td>
                <td class="px-6 py-4">
                  12月13日(土)
                  <br />
                  <span style="font-size: smaller">または</span>
                  12月14日(日)
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">
                  試験結果の発表
                  <br />
                  (Web公表)
                </td>
                <td class="px-6 py-4">未公表</td>
                <td class="px-6 py-4">未公表</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          申込受付期間が約2週間半と短いので忘れないよう注意しましょう。
        </p>
        <h2 className="text-2xl font-bold mb-2">受験料</h2>
        <p>
          受験料は、
          <strong className="text-xl mx-2 underline decoration-green-500">
            9,300円
          </strong>
          です。
        </p>
        <p>
          受験料の納付方法は、3種類から選択できます。インターネットで受験申し込み時に選ぶことができます。
        </p>
        <ul className="list-inside list-disc my-2">
          <li>クレジットカード決済</li>
          <li>コンビニエンスストア決済</li>
          <li>ペイジー(Pay-easy)決済</li>
        </ul>
        <p className="mb-4">
          申込み時に、入金期限が表示され、期限までに未納であった場合は申込みが無効になるため注意ください。
        </p>
        <h2 className="text-2xl font-bold mb-2">申込み方法</h2>
        <p>
          <a
            href="https://moshikomi-shiken.jp/ecee/landing/"
            className="text-blue-600 hover:underline"
          >
            電気技術者試験センターの申込みページ
          </a>
          からアカウントを作成し、
          <a
            href="https://moshikomi-shiken.jp/ecee/user/public/"
            className="text-blue-600 hover:underline"
          >
            マイページ
          </a>
          にログイン後必要事項を記入して申込みを行います。申込みの際に顔写真データのアップロードが必要なので用意しておきましょう。
        </p>
        <p className="mb-4">
          申込み時に選択した入金方法で入金を済ませたらマイページで「入金の確認が取れました」と表示されたことを確認しましょう。
        </p>
        <h2 className="text-2xl font-bold mb-2">学科試験の免除</h2>
        <p>
          下記免除項目にあてはまる方は、申込み時に上期試験の免除を申請できます。
        </p>
        <ol className="list-inside list-decimal my-2">
          <li>直近2回で実施された学科試験の合格者</li>
          <li>
            高等学校以上の学校において､電気工事士法で定める電気工学の課程を修めて卒業した方
          </li>
          <li>第一種、第二種または第三種電気主任技術者免状の取得者</li>
        </ol>
        <p>
          その他、免除項目3に旧電気事業主任技術者検定規則に関わる項目、改正前の鉱山保安法、旧自家用電気工作物施設規則に関わる免除項目4,
          5がありますが省略します。詳細は
          <a
            href="https://www.shiken.or.jp/construction/second/"
            className="text-blue-600 hover:underline"
          >
            電気技術者試験センター
          </a>
          に公開されている受験案内を参照ください。
        </p>
      </main>
      <aside class="max-w-screen-md mx-4 md:mx-auto py-6">
        <h2 class="text-2xl font-bold mb-2">
          第二種電気工事士試験情報はこちら
        </h2>
        <Linkcard
          url="/electrician-2/writtenexam"
          image="/electrician-2/electrician-girl-reading-book-i.webp"
          alt="本を読んで勉強している電気工事士の女性のイラスト"
          title="第二種電気工事士 学科試験の内容と対策"
          description="第二種電気工事士の学科試験について、学科試験の概要と対策、おすすめの参考書などの情報をまとめました。"
        />
        <Linkcard
          url="/electrician-2/practicalexam"
          image="/electrician-2/electrician-girl-working.webp"
          alt="電気工事をしている女性のイラスト"
          title="第二種電気工事士 技能試験の内容と対策"
          description="第二種電気工事士の技能試験の概要と対策、おすすめの工具・練習部材の情報をまとめました。"
        />
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
      </aside>
    </>
  );
}
