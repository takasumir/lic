export const kaisetsuLength = 0b1000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.9を見ていきましょう。</p>
      <p>
        これといった特徴も無い単線図ですが、電源側EETコンセントまでの線が VVF
        2.0-2C
        と太い線を使っているのに注意します。施工省略部にはコンセントが2つあるので、合計3つ分の電流を賄うために
        VVF 1.6-2C ではなく、 VVF 2.0-2C
        を使用しています。EETコンセントからもう一つのコンセントへのケーブル、アースへの電線がありますが、接続先は施工省略です。
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
            <li>電源、スイッチ、その他機器を記入します。</li>
            <li>ジョイントボックスは、大きめの丸で描いています。</li>
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
            スイッチ以外の各機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスからコンセント、「イ」のランプレセプタクルと引掛けシーリングに接続します。
          </p>
          <p>
            コンセントは単線図通り、接地極付接地端子付コンセントから施工省略のコンセントへ線を繋ぎます。
          </p>
          <p>
            非接地側の先の色は白色（図では青）で決まっているのでこの時点で青色で描いています。
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
            コンセントは単線図通り、接地極付接地端子付コンセントから施工省略のコンセントへ線を繋ぎます。
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
            スイッチからランプレセプタクルと引掛シーリングそれぞれへジョイントボックスを経由して線を繋いでいきます。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b0001000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">EETコンセントに接地線を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>接地線はEETコンセントから施工省略のアースまで接続します。</p>
          <p>
            接地線は、当日の問題に記載される施工条件で通常は緑色が指定されるため、緑色で描いています。
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
            ジョイントボックス内ジョイント部の線の本数、リングスリーブの刻印を記入します。スイッチボックスAを差込式、Bをリングスリーブで記載しましたが、当日の問題に記載される施工条件をきちんと読みましょう。
          </p>
          <p>
            VVF1.6-2C以外のケーブルも記入しておくと便利です。電源からジョイントボックスまでのVVF2.0-2Cに加え、ジョイントボックスからEETコンセントまでのケーブルもVVF2.0-2Cを使うことに注意です。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b0100000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">線の色を決定する</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            決まっていない線の色を決めます。スイッチボックスAB間の非接地側の線は、施工条件でスイッチの電源側を黒に指定されているため、スイッチの二次側（引掛シーリング側）を黒以外の色にします。するとスイッチの二次側からスイッチボックスAまでの3芯ケーブルも、スイッチの二次側が赤色に決まります。
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
        <h2 class="font-bold text-lg">完成</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            第二種電気工事士技能試験の候補問題No.9の複線図は、EETコンセントから次のコンセントへの渡り線と接地線がありますが、これといった特徴もなく易しい問題です。EETコンセントまでの線が
            VVF 2.0-2C になることに注意しましょう。
          </p>
        </div>
      </div>
    </>
  );
}
