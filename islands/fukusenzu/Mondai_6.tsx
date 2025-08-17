export const kaisetsuLength = 0b1000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.6を見ていきましょう。</p>
      <p>
        電源は、一般的な単相100Vです。3路スイッチが2個あり、両方とも「イ」の記号が付与され、スイッチに対応した引掛けシーリング「イ」が2個あります。このことから、3路スイッチ「イ」のどちらかを操作したら2個の引掛けシーリング「イ」が点滅する回路だとわかります。
      </p>
      <p>
        コンセントが1つあり、露出形コンセントですが複線図としては連用取付枠に取り付けるコンセントと同じです。
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
              まずは機器を並べていきます。電源、引掛けシーリング、コンセントを記入します。これらは特に注意する点は無いですね。
            </li>
            <li>
              3路スイッチは文字通り接続が3箇所あるスイッチです。0番に接続した先を1番か2番に切り替えるスイッチです。この回路の場合、2つの3路スイッチの1番、2番をお互いに接続するのでお互いの1番、2番が向き合うように描いておくと配線図がきれいに見やすくなります。
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
            スイッチ以外の機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスからコンセント、引掛けシーリングへ線を繋ぎます。
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
          電源の非接地側をコンセント、3路スイッチの0番と接続
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            電源の非接地側はコンセントとスイッチに接続します。3路スイッチは、電源と0番を接続することに注意ください。
          </p>
          <p>
            2つある3路スイッチのどちらに接続しても回路としては動作しますが、施工条件に「電源から3路スイッチS・・・すべて黒色を使用する」と記載があり、暗黙に電源と「S」記号の3路スイッチを接続することが分かります。まあ、普通に考えたら近い方に接続しますよね！
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
            通常の単極スイッチでは、電源と片側の接点を繋いだあと、もう片側を引掛けシーリング等の機器と接続しますが今回は3路スイッチ2個あります。最終的に電源と接続した3路スイッチとは別の3路スイッチの0番が非接地側電源に接続されるため、電源側と別の3路スイッチ（図の左側の3路スイッチ）から引掛けシーリング2個に線を接続します。
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
        <h2 class="font-bold text-lg">3路スイッチ同士を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            最後に3路スイッチ同士を接続します。お互いの1番と3番は、「1-1、3-3」と接続しても「1-3、3-1」のように接続しても同じ動作をするのでどちらでも問題ありません。ここでは図を見やすくするため「1-1、3-3」を接続しました。
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
            ジョイントボックス内のジョイント部は線の本数を記入しておきます。差込形コネクタ、リングスリーブどちらを使うか当日の施工条件をよく読みましょう。ここでは左側（A）のジョイントボックスに差込形コネクタ、右側（B）にリングスリーブの想定で記載しています。
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
            複線図が完成しました！第二種電気工事士技能試験の候補問題No.6は、候補問題13問の中では比較的複雑で難易度の高い問題と言えるでしょう。この問題No.6と、候補問題No.7の4路スイッチを組み合わせたパターン2種類しか出題されないため、一度理解して覚えておけば確実に対処できるようになるはずです。3路スイッチの仕組みをしっかり覚えておきましょう！
          </p>
        </div>
      </div>
    </>
  );
}
