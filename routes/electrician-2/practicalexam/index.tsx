import { Head } from "$fresh/runtime.ts";
import { Image } from "../../../components/Image.tsx";
import { Pa } from "../../../components/Pa.tsx";
import { Linkcard } from "../../../components/Linkcard.tsx";

export default function PracticalExam() {
  return (
    <>
      <Head>
        <title>第二種電気工事士 技能試験の内容と対策</title>
        <meta
          name="description"
          content="第二種電気工事士の技能試験の概要と対策、おすすめの工具・練習部材の情報をまとめました。"
        />
      </Head>
      <header class="px-4 pt-16 pb-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/electrician-2/electrician-girl-working.webp"
            width="1024"
            height="854"
            alt="ケーブルリールを持った電気工事士の女性のイラスト"
          />
          <h1 class="text-4xl font-bold">
            第二種電気工事士
            <br />
            技能試験の内容と対策
          </h1>
        </div>
      </header>
      <main class="max-w-screen-md mx-4 md:mx-auto py-6">
        <p class="mb-4">
          第二種電気工事士の技能試験の概要と対策、おすすめの工具・練習部材の情報をまとめました。
        </p>
        <h2 class="text-2xl font-bold mb-2">技能試験の内容</h2>
        <p>
          技能試験の内容は、候補問題13問のうち、当日指定された1問の配線図と施工指示が問題文に記載され、時間内に支給された材料を使い配線図通りのものを完成させるというものです。工具は持参して試験に望みます。
        </p>
        <p>
          試験時間は、
          <strong class="text-xl mx-2 underline decoration-green-500">
            40分
          </strong>
          です。
        </p>
        <p>
          学科試験の120分に比べ、だいぶ時間が少ないと思われるのではないでしょうか。試験は時間との戦いになり、練習を重ねて工具の使い方も慣れ、どの問題も一通り経験した状態で5分余るかどうかだと思います。
        </p>
        <p class="mb-4">
          あたりまえのことですが、候補問題を全てしっかり事前に練習した状態で受けないと合格はかなり厳しいでしょう。
        </p>
        <h2 class="text-2xl font-bold mb-2">合格率と合格基準</h2>
        <p>
          技能試験の合格基準点は、
          <strong class="text-xl mx-2 underline decoration-green-500">
            作品に欠陥がないこと
          </strong>
          です。欠陥がない＝完成していることが前提であり、未完成では不合格になります。
        </p>
        <p>
          令和6年度第二種電気工事士下期技能試験の合格率は、
          <strong class="text-xl mx-2 underline decoration-green-500">
            69.5%
          </strong>
          でした。
        </p>
        <p class="mb-4">
          学科試験より合格率が若干高いです。個人的に受験した感想は、技能試験の方が合格の難易度は高く感じました。学科試験の合格者のみが技能試験を受けるため、皆それなりに準備している中での合格率と思ったほうがよいでしょう。
        </p>
        <h2 class="text-2xl font-bold mb-2">候補問題の入手方法</h2>
        <p>
          候補問題13問は、
          <a href="https://www.shiken.or.jp/construction/second/skill/">
            電気技術者試験センターのWebサイト
          </a>
          に掲載されます。例年1月中旬頃に候補問題が公開されますが、毎年ほぼ同じ内容なので候補問題の公開前に練習を始めても問題は無いかと思います。
        </p>
        <p class="mb-4">
          技能試験対策の本も販売されていますが、動画を見たほうがわかりやすいため、候補問題を入手したら必ずしも対策本は必要無いと思います。動画は、
          <a href="https://www.youtube.com/watch?v=jEnsYcevBAM&t=556s">
            ホーザンのYoutube
          </a>
          が候補問題の複線図作成から完成まで全過程が収められていますのでおすすめです。
        </p>
        <h2 class="text-2xl font-bold mb-2">複線図の練習</h2>
        <p class="mb-4">
          技能試験受験にあたり、まず攻略しなければならないのは、単線図の問題から複線図を描けるようになることです。初めはとても難しく感じますが、複線図を描く手順があり、手順を覚えれば悩まずに描けるようになれます。また、候補問題13問が事前に公開されているため、しっかり勉強すれば当日には楽に描くことができるようになります。
        </p>
        <h2 class="text-2xl font-bold mb-2">おすすめの工具と練習部材</h2>
        <p>
          技能試験のために必要となるものは多く、そして高いです。自己投資だと思って腹をくくって購入しました。その中で買ってよかったもの、不要だったかなと思うものなどをアドバイスしたいと思います。
        </p>
        <h3 class="text-xl font-bold mb-2">工具</h3>
        <p>
          工具単品で選んでいくのもよいかと思いますが、試験対策として一式揃えるのであればホーザンの工具セットがおすすめです。VVFストリッパーや圧着工具にバリエーションがありますが、第二種電気工事士試験にはDK-28がよいと思います。
        </p>
        <p>
          DK-28工具セットに、候補問題13問1回分の練習用部材がセットになったDK-51がおすすめです。練習1回では物足りなくなった場合はホームセンターでケーブルを買い足せばよいでしょう。
        </p>
        <Pa asin="B079JG1MD1" />
        <p>
          このセットに加えて、「合格ゲージ」と「合格クリップ」も購入しておくと作業がかなりやりやすくなります。合格ゲージは作業のスピードアップに役立ちます。合格クリップは配線同士を圧着前に仮で束ねるために使用するもので、無いとかなり不便だと思います。特に、試験中に一度圧着してしまった配線をやり直すのは非常にロスが大きいため、施工前に仮固定した配線を確認するために合格クリップは必須と言ってもいいでしょう。
        </p>
        <Pa asin="B004WZ6ZDK:B004WZ6ZHQ" />
        <p>
          何種類かある工具セットのどれを買おうか迷っている方のために、比較表を作りました。
        </p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
          <table class="w-full text-left rtl:text-right">
            <thead class="text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  商品
                </th>
                <th scope="col" class="px-6 py-3">
                  VVFストリッパー
                </th>
                <th scope="col" class="px-6 py-3">
                  圧着工具
                </th>
                <th scope="col" class="px-6 py-3">
                  その他
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">DK-11</td>
                <td class="px-6 py-4">○P-958</td>
                <td class="px-6 py-4">○P-737</td>
                <td class="px-6 py-4">
                  (不要)ケーブルカッター、ケーブルストリッパー、ハンドブック
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">DK-17</td>
                <td class="px-6 py-4">○P-958</td>
                <td class="px-6 py-4">×P-77</td>
                <td class="px-6 py-4">合格シリーズ3点セット</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">DK-26</td>
                <td class="px-6 py-4">×P-929</td>
                <td class="px-6 py-4">○P-737</td>
                <td class="px-6 py-4">ハンドブック</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">DK-26</td>
                <td class="px-6 py-4">×P-929</td>
                <td class="px-6 py-4">○P-737</td>
                <td class="px-6 py-4">ハンドブック</td>
              </tr>
              <tr class="bg-white border-b font-bold">
                <td class="px-6 py-4">DK-28</td>
                <td class="px-6 py-4">○P-958</td>
                <td class="px-6 py-4">○P-737</td>
                <td class="px-6 py-4">ハンドブック</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">DK-28AZ</td>
                <td class="px-6 py-4">○P-958</td>
                <td class="px-6 py-4">○P-737</td>
                <td class="px-6 py-4">DVDか合格シリーズ1点付属</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">DK-29</td>
                <td class="px-6 py-4">×なし</td>
                <td class="px-6 py-4">×P-77</td>
                <td class="px-6 py-4">ハンドブック</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          VVFストリッパーと圧着工具は、第二種電気工事士用に小回りの聞くP-958とP-737が入っているDK-28がおすすめです。
          これに1点おまけが付いたDK-28AZがあります。ハンドブックは試験候補問題が載っているので
          あると便利です。DVDはHOZANのYouTubeの方が詳しい動画があるのでどちらでもよし、
          合格シリーズは合格ゲージと合格クリップをおすすめしますが数百円なのでバラで注文すればよいでしょう。
        </p>
        <p>
          合格マルチツールも買いましたが、正直使いにくく、マイナスドライバーとウォーターポンププライヤーを使うのが良いです。
          VVFストリッパーは高額ですが一発で剥けるP-929も買いました。しかし取り回しや刃の深さ調整が微妙でしかもP-958には
          スケールも付いているので第二種電気工事士試験に限ればP-958一択になります。かなり高かったのにもったいない、、、
        </p>
        <p class="mb-4">
          工具類については別の記事で細かく使い勝手をレビューしたいと思います。
        </p>
        <h3 class="text-xl font-bold mb-2">練習用部材</h3>
        <p>
          先に紹介しました
          <a
            href="https://www.amazon.co.jp/gp/product/B07D4PMT46?ie=UTF8&amp;tag=takasumir-22&amp;camp=247&amp;linkCode=xm2&amp;creativeASIN=B079JFJHSM&amp;th=1&amp;_encoding=UTF8&amp;tag=takasumir-22&amp;linkCode=ur2&amp;linkId=8aa72340671f5b94d4d4e2d1292e5e26&amp;camp=247&amp;creative=1211"
            target="_blank"
          >
            工具(DK-28) と 練習用部材(DK-51) セット
          </a>
          にも含まれる
          <em>DK-51があれば機器、配線含め13問各1回分の部材が揃います。</em>
        </p>
        <p>
          2回分練習する場合はDK-52があり、工具DK-28と部材DK-52をそれぞれ購入のパターンもありかと思います。
        </p>
        <p class="mb-4">
          2回分のセットは、機器は1回分＋電線が2回分付属してきます。HOZANのセットは価格高めで2回分練習できる
          時間があるかわからなかったため、筆者はDK-51の1回分セットで練習後、下の配線を別途購入して2回練習行いました。
          細かな部材、圧着スリーブと取付枠も買い足す必要がありましたがホームセンターで調達できました。
        </p>
        <h2 class="text-2xl font-bold mb-2">練習方法</h2>
        <p>
          Youtubeで
          <a href="https://www.youtube.com/watch?v=jEnsYcevBAM&t=556s">
            「電工試験の虎 ホーザン」
          </a>
          を見ながら練習をしましょう。下記の流れで練習を行うのがおすすめです。
        </p>
        <ol class="list-decimal list-outside my-4 ml-4">
          <li>
            ハンドブック等で機器とストリップ量、圧着スリーブの選び方（太さと本数）を確認、頭に入れる。
          </li>
          <li>単位作業の動画を全て見る</li>
          <li>
            候補問題No.1の解説ノーカット版を見て40分でどんな流れ、作業を行っていくか見る
          </li>
          <li>実際に候補問題No.1を時間を測りやってみる</li>
          <li>わからなかったりミスがあるがとりあえず40分＋αで完成させる</li>
          <li>動画を再度見てどうすれば良かったか確認する</li>
          <li>候補問題No.2を時間を測りやってみる</li>
          <li>動画を見て確認</li>
        </ol>
        <p>
          この調子で候補問題No.3 ...
          No.13と1回ずつ作業と動画確認をすればだんだんミスがなくなり、
          ストリップ量や圧着スリーブ選択も頭に入ってきます。作業も慣れてきて40分以内に完成させられるでしょう。
        </p>
        <p>再確認の意味で2回めを行えば準備万全です。</p>
        <p>
          下が私の初回作品です。60分かかりさらに引掛シーリングのケーブルを間違えてとんでもなく短くなってしまいました。
          他にも配線接続も間違っていた気がします。
        </p>
        <Image
          src="./0000.webp"
          width="640"
          height="481"
          alt="練習開始初期の作品"
        />
        <p>
          13問の1週目後半には35分くらいで安定して完了し、欠陥もなくなりました。
        </p>
        <Image
          src="./0002.webp"
          width="640"
          height="360"
          alt="練習後半の作品"
        />
        <p class="mb-4">
          試験直前までに2回めもなんとかこなし、30分程度で余裕を持って完了できるようになり、当日も
          30分で完成することができました！候補問題No.3と楽勝な部類の問題を引いたのもありますが。。。{" "}
        </p>
        <h2 class="text-2xl font-bold mb-2">
          欠陥の種類とありがちなミスを確認しておく
        </h2>
        <p class="mb-4">
          欠陥とありがちなミスについては電気技術者試験センターより
          <a href="https://www.shiken.or.jp/candidate/handankizyun.html">
            「欠陥の判断基準」
          </a>
          が公開されています。HOZANの動画やネットでも情報がありますが、結局ここが一番詳しいため
          読んでおくことをおすすめします。
        </p>
        <h2 class="text-2xl font-bold mb-2">試験当日のTips</h2>
        <p class="mb-4">
          試験当日は、練習と全く同じことをするので特に注意することはありませんが、
          ネット情報などで得た細かなテクニックのとやってみた感想を列挙してみます。
        </p>
        <h3 class="text-xl font-bold mb-2">試験問題が配られたら透視する</h3>
        <p class="mb-4">
          少しでも問題を先に読んで複線図がすぐ描けるようにするということですが、
          いや、見えないです。すこしうっすらと一部が見えましたがどの問題かなどわからず、
          結局
          <em>意味はありませんでした。</em>
        </p>
        <h3 class="text-xl font-bold mb-2">HOZANの合格クリップが便利</h3>
        <p class="mb-4">
          これは練習時から分かりますが、
          <em>あった方が絶対によいと思います</em>。
          これが無いと配線をまとめるのは難儀します。
        </p>
        <h3 class="text-xl font-bold mb-2">HOZANの合格ゲージも便利</h3>
        <p>
          VVFストリッパーに付けて長さを測ってそのままストリップ、カットできるゲージです。
        </p>
        <p>
          試験で使っている人は周りにはいませんでしたが
          <em>個人的にはかなりおすすめです。</em>
        </p>
        <p>
          工具側面に挟むだけなのでズレて取れそうになってきますのでちょいちょい修正必要です。
          これは好みかもしれませんね。
        </p>
        <h3 class="text-xl font-bold mb-2">
          HOZANの布ゲージをテープで机にとめる
        </h3>
        <p class="mb-4">
          これはやりました。テープを持ってくる必要があります。
          <em>まあ便利です。</em>
        </p>
        <h3 class="text-xl font-bold mb-2">ごみ袋をテープで机の隅にとめる</h3>
        <p class="mb-4">
          実際の試験でやってみました。机の上が空きますがこれはこれで廃材を入れにくいので
          <em>どちらでもよいと思います。</em>
        </p>
        <h2 class="text-2xl font-bold mb-2">まとめ</h2>
        <p>
          第二種電気工事士の技能試験は40分で欠陥が1つも無い状態で完成させる必要があり、
          練習を十分に行わないと合格は厳しいです。
        </p>
        <p class="mb-4">
          工具や練習用の材料、動画などの情報は豊富にありしっかりと対策すれば
          確実に合格できるので時間を確保して練習に励みましょう！
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
          url="/electrician-2/writtenexam"
          image="/electrician-2/electrician-girl-reading-book-i.webp"
          alt="本を読んで勉強している電気工事士の女性のイラスト"
          title="第二種電気工事士 学科試験の内容と対策"
          description="第二種電気工事士の学科試験について、学科試験の概要と対策、おすすめの参考書などの情報をまとめました。"
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
