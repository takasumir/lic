export const kaisetsuLength = 0b1000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.7を見ていきましょう。</p>
      <p>
        3路スイッチが2個と4路スイッチが1個あり、すべて「イ」の記号が付与されています。スイッチに対応したランプレセプタクル「イ」が2個あります。配線方法は施工条件に「
        3箇所のスイッチをそれぞれ操作することによりランプレセプタクルを点滅できるようにする。
        」とあります。4路スイッチを使う問題はこの候補問題No.7のみでこのパターンのみ覚えておけば大丈夫です。
      </p>
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
          <p>まずは機器を並べていきましょう。</p>
          <ul class="list-disc list-inside my-2">
            <li>
              まずは機器を並べていきます。3路スイッチは前の
              <a href="./6">問題No.6の解説</a>を参照ください。
            </li>
            <li>
              4路スイッチは接続が4箇所あります。＝と×を切り替えるスイッチで3路スイッチ2個の間に挟むことで3路スイッチ、4路スイッチどれを操作してもランプレセプタクルを点滅できます。
            </li>
            <li>
              ジョイントボックスは中に配線接続を描くので、左側のジョイントボックスは大きめの○で表現します。右側はアウトレットボックスが支給され、□で記載しています。複線図としてはあまり関係無いですね。
            </li>
          </ul>
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
            スイッチ以外の機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスからランプレセプタクルへ線を繋ぎます。
          </p>
          <p>
            ジョイントボックス内では必ず線同士をリングスリーブか差し込みコネクタで接続するため、接続記号を
            <span class="text-[#22f]">青丸●</span>
            で表現します。非接地側の先の色は白色（図では青）で決まっているのでこの時点で青色で描いています。
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
        <h2 class="font-bold text-lg">
          100V電源の非接地側をコンセント、3路スイッチの0番と接続
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            電源の非接地側はスイッチに接続します。3路スイッチは、電源と0番を接続することに注意ください。
          </p>
          <p>
            2つある3路スイッチのどちらに接続しても回路としては動作しますが、施工条件に「電源から3路スイッチS・・・すべて黒色を使用する」と記載があり、暗黙に電源と「S」記号の3路スイッチを接続することが分かります。
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
        <h2 class="font-bold text-lg">
          もう一方の3路スイッチの0番と機器を接続
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            通常の単極スイッチでは、電源と片側の接点を繋いだあと、もう片側を引掛けシーリング等の機器と接続しますが今回は3路スイッチ2個と4路スイッチがあります。最終的に電源と接続した3路スイッチとは別の3路スイッチの0番が非接地側電源に接続されるため、電源側と別の3路スイッチ（図の右側の3路スイッチ）からランプレセプタクル2個に線を接続します。
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
        <h2 class="font-bold text-lg">3路スイッチと4路スイッチを接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            4路スイッチは、(1,3)と、(2,4)間の接続を逆転させるものなので、3路スイッチからの接続先(1,3)を逆に繋いでも、(2,4)を逆につないでも、さらに(1,3)と(2,4)を反対にしても問題ありません。
          </p>
          <p>
            さらには3路スイッチSの1番を、もう一つの3路スイッチの1番に繋ごうが2番に繋ごうが変わりありません。今回は、複線図が見やすいように図のように接続しました。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b010000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">情報の記入</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            線はすべて繋がりましたので、このあとの制作作業のために必要な情報を書き込んで完成です。
          </p>
          <p>
            ジョイントボックス内のジョイント部は線の本数を記入しておきます。差込形コネクタ、リングスリーブどちらを使うか当日の施工条件をよく読みましょう。ここでは左側（A）のジョイントボックスにリングスリーブ、右側（B）に差込形コネクタの想定で記載しています。
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
        <h2 class="font-bold text-lg">決まっていない電線の色を決定する</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            ジョイントボックスと3路スイッチ間、ジョイントボックス間の線の色を決める必要があります。施工条件で「電源から3路スイッチS及び露出形コンセントまでの非接地側電線には、黒色を使用する。」と指定されます。これ以外の○で囲んだ電線の色別は問われません。今回は図のように色分けしました。
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
        <h2 class="font-bold text-lg">まとめ</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            複線図が完成しました！第二種電気工事士技能試験の候補問題No.7は、No.6同様に比較的複雑で難易度の高い問題と言えるでしょう。スイッチの動作の理解が難しい場合は複線図をシャープペンシルで描いたあと、3路スイッチの／と＼、4路スイッチの＝と☓を消しては描いてと動かしてみると理解が深まりますよ！
          </p>
        </div>
      </div>
    </>
  );
}
