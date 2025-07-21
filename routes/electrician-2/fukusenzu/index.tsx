import { Head } from "$fresh/runtime.ts";
import { Linkcard } from "../../../components/Linkcard.tsx";

export default function Fukusenzu() {
  return (
    <>
      <Head>
        <title>第二種電気工事士 複線図の描き方</title>
        <meta
          name="description"
          content="技能試験でポイントとなる、単線図から複線図を作成する方法を解説します。"
        />
      </Head>
      <header className="px-4 pt-16 pb-8 mx-auto bg-[#86efac]">
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            className="my-6"
            src="/electrician-2/electrician-girl-with-drawing.webp"
            width="1280"
            height="854"
            alt="電気図面を見る電気工事士の女の子のイラスト"
          />
          <h1 className="text-4xl font-bold">
            第二種電気工事士
            <br />
            複線図の描き方
          </h1>
        </div>
      </header>
      <main className="max-w-screen-md mx-4 md:mx-auto py-6">
        <p className="mb-4">
          技能試験でポイントとなる、単線図から複線図を作成する方法を解説します。
        </p>
        <h2 class="font-bold text-2xl mb-4">
          第二種電気工事士技能試験は複線図の作成が必要
        </h2>
        <p>
          第二種電気工事士技能試験では、出題される単線図から複線図を作成する能力が必要です。初めて勉強する方には難しく感じて感じてしまいますが、描き方の手順を覚えてしまえば簡単に複線図を作成することができます。
        </p>
        <p class="mb-4">
          この連載では、第二種電気工事士技能試験を受ける方を対象に、アニメーションで複線図の描き方を解説します。各機器を線で接続する手順や、実際の試験で役に立つ補足情報の記載などの詳細を解説します。
        </p>
        <h2 class="font-bold text-2xl mb-4">候補問題の入手方法</h2>
        <p>
          第二種電気工事士技能試験では、あらかじめ13題の試験候補問題が公開され、本番ではそのうち1題を実際に施工します。この問題は単線図で与えられるため、施工には複線図にする必要があります。
        </p>
        <p>
          候補問題は、
          <a href="https://www.shiken.or.jp/construction/second/skill/">
            電気技術者試験センター
          </a>
          のホームページに公表されますので、確認しておきましょう。
        </p>
        <p class="mb-4">
          候補問題に記載の無いケーブルの長さや、電線の接続にリングスリーブ、差込形コネクタのどちらを使うかなどの施工条件は当日の試験問題に記載されます。
        </p>
        <h2 class="font-bold text-2xl mb-4">過去問と解答</h2>
        <p>
          電気技術者試験センターのホームページには、
          <a href="https://www.shiken.or.jp/construction/second/qa/">
            過去問と解答
          </a>
          も公表されています。候補問題は、毎年ほとんど同じなのでこちらも確認しておくとよいでしょう。
        </p>
        <p class="mb-4">施工条件は変わる可能性があるため注意しましょう。</p>
        <h2 class="font-bold text-2xl mb-4">
          候補問題ごとの複線図の描き方解説
        </h2>
        <p>それでは順に候補問題と解説を見ていきましょう！</p>
        <Linkcard
          url="./fukusenzu/1"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.1の解説"
          title="候補問題No.1"
          description="第二種電気工事士技能試験の候補問題No.1の単線図から複線図を作成する方法を解説します。"
        />
        <Linkcard
          url="./fukusenzu/2"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.2の解説"
          title="候補問題No.2"
          description="候補問題No.2の単線図から複線図を作成する方法を解説します。パイロットランプがありますが、常時点灯なので比較的簡単な問題です。"
        />
        <Linkcard
          url="./fukusenzu/3"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.3の解説"
          title="候補問題No.3"
          description="候補問題No.3はタイムスイッチがポイントです。タイムスイッチの内部結成図を読み取り、複線図を作成する方法を解説します。"
        />
        <Linkcard
          url="./fukusenzu/4"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.4の解説"
          title="候補問題No.4"
          description="三相200Vの電源がある候補問題No.4は一見難しそうですが、実は単純な問題です。"
        />
        <Linkcard
          url="./fukusenzu/5"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.5の解説"
          title="候補問題No.5"
          description="単相200V電源と接地端子を接地極付きコンセントへ接続する問題です。単相と三相の違いはありますが、No.4と似た問題です。"
        />
        <Linkcard
          url="./fukusenzu/6"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.6の解説"
          title="候補問題No.6"
          description="3路スイッチを2個使い、いずれのスイッチでも機器を点滅できる回路です。3路スイッチの使い方をしっかり覚えましょう。"
        />
        <Linkcard
          url="./fukusenzu/7"
          image="/electrician-2/circuit.webp"
          alt="候補問題No.7の解説"
          title="候補問題No.7"
          description="3路スイッチ2個と4路スイッチを使い、いずれのスイッチでも機器を点滅できる回路です。複雑な問題ですが頑張って理解しましょう！"
        />
      </main>
    </>
  );
}
