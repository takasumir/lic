export const kaisetsuLength = 0b10000000;
import { Linkcard } from "../../components/Linkcard.tsx";

export function Mondai(props) {
  return (
    <>
      <p>
        候補問題No.13のポイントは、自動点滅器で屋外灯を点滅させる回路があることです。自動点滅器は3箇所の端子がある端子台で代用されており、端子台がスイッチだと思えば複線図は難しいことはありません。
      </p>
      <p>
        VVRケーブルが出てくるので電工ナイフでVVRケーブルを剥く作業があり、できれば引きたくない問題ですがVVRケーブルの剥き方は下記の記事を参考にしてください。
      </p>
      <Linkcard
        url="/electrician-2/vvrcable"
        image="/electrician-2/electrician-girl-grab-cables.webp"
        alt="ケーブルを持った電気工事士の女の子のイラスト"
        title="【第二種電気工事士】VVRケーブルの剥き方 5つの方法を試した結果は！？"
        description="第二種電気工事士技能試験の中で、電工ナイフを使った被覆剥きが必要となるVVRケーブル。施工には技術を磨く必要があります。ネット等で様々なやり方が紹介されていますが、5つの方法を解説、比較します。"
      />
    </>
  );
}

export function Kaisetsu({ step, prevStep, nextStep }) {
  return (
    <>
      {/*Step: {step.toString(2)}*/}
      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">機器を並べる</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            まずは機器を並べていきましょう。右側のスイッチ「ロ」が自動点滅器になっています。説明図では、端子2の上にあるCdS回路で人を検知すると端子3の上にあるスイッチが入になる仕組みです。
          </p>
          <p>
            スイッチのある側が非接地側になるので、3と1は非接地側です。CdS回路に電源供給が必要で、CdS回路の上側が非接地側になるので、下側の2が接地側になります。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00001 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">電源の接地側と機器を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            接地側の配線をジョイントボックスを介しスイッチ以外の各機器に繋いでいきましょう。非接地側の線は施工条件で白色を指定されるため、（白の変わりに）青色で描いています。
          </p>
          <p>
            自動点滅器は2番の接地側に接続します。自動点滅器から屋外灯への線は後ほど記入します。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00010 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">電源の非接地側とスイッチを接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>電源の非接地側をコンセントとスイッチに接続します。</p>
          <p>
            自動点滅器は1番に接続します。先程、自動点滅器の非接地側は1番と3番と言いました。自動点滅器の説明図を見ると、2番のCdS回路はスイッチがONでもOFFでも電源が供給されている必要があるので、電源側を1番に接続します。電源側を3番に接続するとスイッチOFFのときにCdS回路に電源が供給されなくなってしまいます。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00100 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">スイッチと機器間を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            スイッチから機器へ接続していきます。スイッチ「イ」からジョイントボックスを経由してランプレセプタクルへ接続します。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b01000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">自動点滅器の端子台と屋外灯を接続 </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            屋外灯への非接地側の線は、端子台「ロ」の非接地側の端子、2番から取ります。既にジョイントボックスからの非接地線が接続されていますが、同じ2番に屋外灯の非接地線も固定します。
          </p>
          <p>
            非接地側は3番に接続します。スイッチで3番がON/OFFする、と考えればわかりやすいと思います
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b10000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">アース線を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            コンセントの接地極にアース線を接続します。通常、施工条件で指定される緑色で記載しています。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b100000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">情報の記入</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            ジョイントボックス内ジョイント部の線の本数とリングスリーブの種類を記入します。施工条件でジョイントボックスAにリングスリーブ、Bに差込形コネクタを指定された場合を記載しています。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b1000000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">線の色を決定する</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            まだ決まっていない線の色を決めます。ジョイントボックス間の3本の線のうち、非接地側2本のどちらかを赤色にする必要があります。施工条件から、スイッチからランプレセプタクルに行く線が赤色に決まります。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b10000000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">完成</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            第二種電気工事士技能試験の候補問題No.13の複線図は、自動点滅器があるため一見難しそうに見えますが、端子台で代用され、候補問題No.3など端子台を使う同じパターンの問題があるので一度理解すれば迷うことなく解けると思います。
          </p>
        </div>
      </div>
    </>
  );
}
