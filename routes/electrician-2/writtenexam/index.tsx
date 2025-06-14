import { Head } from "$fresh/runtime.ts";
import { Pa } from "../../../components/Pa.tsx";
import { Linkcard } from "../../../components/Linkcard.tsx";

export default function WrittenExam() {
  return (
    <>
      <Head>
        <title>第二種電気工事士 学科試験の内容と対策</title>
        <meta
          name="description"
          content="第二種電気工事士の学科試験について、学科試験の概要と対策、おすすめの参考書などの情報をまとめました。"
        />
      </Head>
      <header className="px-4 pt-16 pb-8 mx-auto bg-[#86efac]">
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            className="my-6"
            src="/electrician-2/electrician-girl-reading-book.webp"
            width="1024"
            height="728"
            alt="本を開いて勉強する様子のイラスト"
          />
          <h1 className="text-4xl font-bold">
            第二種電気工事士
            <br />
            学科試験の内容と対策
          </h1>
        </div>
      </header>
      <main className="max-w-screen-md mx-4 md:mx-auto py-6">
        <p className="mb-4">
          第二種電気工事士の学科試験について、学科試験の概要と対策、おすすめの参考書などの情報をまとめました。
        </p>
        <h2 className="text-2xl font-bold mb-2">学科試験の内容</h2>
        <p>
          学科試験の内容は、下記7科目について出題されます。回答は、全て4択問題で、イ．ロ．ハ．ニ．の中から正解を選択する形式です。試験時間は
          <strong className="text-xl mx-2 underline decoration-green-500">
            120分
          </strong>
          、出題数は
          <strong className="text-xl mx-2 underline decoration-green-500">
            50問
          </strong>
          です。
        </p>
        <ol className="list-inside list-decimal my-2">
          <li>電気に関する基礎理論</li>
          <li>配電理論及び配線設計</li>
          <li>電気機器、配線器具並びに電気工事用の材料及び工具</li>
          <li>電気工事の施工方法</li>
          <li>一般用電気工作物等の検査方法</li>
          <li>配線図</li>
          <li>一般用電気工作物等の保安に関する法令</li>
        </ol>
        <p>
          解答方法は、問題用紙とマークシートを使う筆記方式と試験会場に準備されたパソコンの画面上で行うCBT方式があり、マイページからの申込み時に選択します。
        </p>
        <p className="mb-4">
          CBT方式は1週間の試験期間中で希望日時を事前にマイページから予約し、予約した試験日の3日前までであれば予約変更ができ、全国どの会場でも受験できるメリットがあります。（予約を前倒しする場合は、変更する日から3日後以降の日程で変更する）
        </p>

        <h2 className="text-2xl font-bold mb-2">合格率と合格基準</h2>
        <p>
          学科試験の合格基準点は、100点満点中、
          <strong className="text-xl mx-2 underline decoration-green-500">
            60点
          </strong>
          です。
        </p>
        <p>
          令和7年度第二種電気工事士上期学科試験の合格率は、
          <strong className="text-xl mx-2 underline decoration-green-500">
            56.5%
          </strong>
          でした。
        </p>
        <p className="mb-4">
          4択で60点取れば合格できるため、簡単そうに感じますが、合格率は結構低いと思われるのではないでしょうか。しっかりと試験勉強をする必要がありますが、とはいえ参考書を一通り勉強し、公開されている過去問を数回分行って試験に望めば十分合格できる内容の試験です。
        </p>

        <h2 className="text-2xl font-bold mb-2">おすすめの参考書と過去問</h2>
        <p>
          参考書は、第二種電気工事士筆記試験の全体をカバーするものであればどれを使っても問題ないと思いますが、下記の参考書を使いました。初心者にもわかりやすく書かれており、これ一冊で十分でした。
        </p>
        <Pa asin="4815618429" />
        <p className="mb-4">
          電気技術者センターのサイトに
          <a href="https://www.shiken.or.jp/construction/second/qa/">
            過去問と解答
          </a>
          が公開されています。過去3回分程度はダウンロードして実力把握と間違えた部分を参考書で確認しましょう。
        </p>
        <h2 className="text-2xl font-bold mb-2">
          CBT方式と筆記方式どちらを選択する？
        </h2>
        <p>
          CBT方式とマークシート方式の筆記試験どちらを選択するか、悩みどころかもしれません。結論から言うと、どちらでもいいと思います。
        </p>
        <p>
          理由としては、一通り勉強できていれば時間が足りなくなるような試験では無く、逆に時間が余る場合が多いかと思います。なので、パソコンでの入力かマークシートか、スクリーンを見るか紙を見るかはあまり試験結果には関係しないでしょう。
        </p>
        <p className="mb-4">
          筆記方式は日程が選べず、1日しか無いためその日を空けられるかどうかが一つの判断基準になるかと思います。
        </p>
        <h2 className="text-2xl font-bold mb-2">勉強方法</h2>
        <p>
          おすすめの勉強方法は、まず参考書を練習問題も解きながら一通り最終ページまで学習します。
        </p>
        <p>
          その後、過去3回分の過去問を本番と同じ時間で解いて、1回ごとに答え合わせをして間違えた問題、自信をもって回答できなかった問題を参考書やネット情報で調べます。
        </p>
        <p>
          CBT方式は、電気技術者試験センターの
          <a href="https://www.shiken.or.jp/construction/second/department/">
            学科試験のポイント
          </a>
          の下部リンクからCBT方式を体験できるため、一度パソコンからアクセスして要領を掴んでおくとよいかと思います。
        </p>
        <p className="mb-4">
          基本的には上記を試験日までにやりきれるか、で、ほぼ合否が決まると思います。参考書は、自分の読むペースを掴んでだいたい何日必要か推定し、過去問をやる時間を含めて計画を作り、時間を空けましょう。ほんとうに、これが一番重要です。
        </p>
        <h2 className="text-2xl font-bold mb-2">まとめ</h2>
        <p>
          第二種電気工事士の学科試験は、合格率は6割に満たないものの決して難しい内容ではありません。試験日までに参考書と過去問をやり切れたかで決まると言っても過言ではありませんので、しっかりと学習計画を立て時間を作りましょう！
        </p>
      </main>
      <aside class="max-w-screen-md mx-4 md:mx-auto py-6">
        <h2 class="text-2xl font-bold mb-2">
          第二種電気工事士試験情報はこちら
        </h2>
        <Linkcard
          url="/electrician-2/examday"
          image="/electrician-2/electrician-girl-and-calender-i.webp"
          alt="カレンダーを見る女の子のイラスト"
          title="第二種電気工事士 試験日程と受験申込み方法"
          description="2025年度(令和7年度)第二種電気工事士試験の試験日程と受験申込み方法を解説します。"
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
