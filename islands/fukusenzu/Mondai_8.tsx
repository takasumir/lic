export const kaisetsuLength = 0b1000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.8を見ていきましょう。</p>
      <p>
        見慣れない▲の並んだ記号、リモコンリレーがポイントとなる問題です。 ●
        <sub>R</sub>{" "}
        のリモコンスイッチを操作することでそれぞれイロハのリモコンリレーON/OFFします。
      </p>
      <p>
        リモコンスイッチの左には
        <span class="border-2 border-black rounded-full p-1 mx-1 w-8 h-8 inline-flex justify-center items-center">
          T
        </span>
        <sub>R</sub>
        リモコントランスがあり、100V電源からリモコンスイッチ用に24Vに電圧を落としています。100V電源から引掛けシーリングなど各機器に供給される線とリモコンスイッチ用の線に分かれており、それぞれにブレーカーがついています。
      </p>
      <p>
        リモコンリレーの左側は上述のようにごちゃごちゃしていますが、「施工省略」なので複線図には出てきません。リモコンリレーは試験ではただの端子台です。
      </p>
      <p>
        この問題は、赤字のリモコンスイッチへのケーブルが「VVF1.6-2C×3」の場合と、「VVF1.6-2C×2」2種類のパターンが想定されます。以下、「VVF1.6-2C×3」の場合を解説し、最後に「VVF1.6-2C×2」の場合の複線図を記載します。
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
              リモコンリレーは計6個の端子になります。通常のスイッチ同様にONで2つの端子が電気的に接続されます。
            </li>
            <li>
              問題ではアウトレットボックスが支給されるため□で描いています。この問題はジョイントボックスが1個で中がごちゃごちゃするので大きめに描いておきましょう。
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
            リモコンリレー以外の機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスからイロハの機器へと線を繋ぎます。
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
          100V電源の非接地側とリモコンリレーを接続
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            電源の非接地側は、通常コンセントとスイッチに接続します。今回はスイッチに相当するものがリモコンリレーになります。電源からジョイントボックスへ、ジョイントボックスからリモコンリレーのイロハにそれぞれ分岐して接続します。
          </p>
          <p>
            令和7年度の技能試験では、施工条件でイロハのリモコンリレーにはそれぞれ2芯ケーブル1本使用の指示がありましたのでこの図の通りですが、リモコンリレーの非接地電源側をわたり線で繋ぐ方法もあります。最後に解説しますが施工条件をよく確認しましょう。
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
        <h2 class="font-bold text-lg">リモコンリレーと機器間を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            リモコンリレーからイロハそれぞれの機器へジョイントボックスを経由して繋いでいきます。方切りスイッチの場合と全く同じ考えですね。
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
        <h2 class="font-bold text-lg">情報の記入</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            線はすべて繋がりました。複雑な単線図でしたが複線図はあっけなく完成です。このあとの制作作業のために必要な情報を書き込んで完成です。
          </p>
          <p>
            ジョイントボックス内ジョイント部の線の本数、リングスリーブの刻印を記入します。VVF1.6-2C以外のケーブル、電源からジョイントボックスまでのVVF2.0-2Cも記入しておきますと施工の際に便利です。
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
        <h2 class="font-bold text-lg">線の色を決定する</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            まずは決まっていない線の色を決めます。施工条件で電源からリモコンリレーまでは黒色が指定されているため、リモコンリレーから機器側への線を白（図では青）にします。
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
        <h2 class="font-bold text-lg">完成</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            単線図は見慣れないリモコンリレーに施工省略部分の複雑な回路に身構えてしまいますが、複線図はとても単純です。この問題は、アウトレットボックス内で電線を接続するのが面倒ですが、複線図としては簡単な問題ですね。
          </p>
          <p>
            最後に、この問題は施工条件次第でリモコンリレーの非接地電源側をわたり線で繋ぐ方法もあり、次にわたり線の場合の複線図を解説します。
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
        <h2 class="font-bold text-lg">わたり線の場合</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            電源からリモコンリレーへのケーブルが「VVF1.6-2C×2」の場合について解説します。
          </p>
          <p>
            上の例ではリモコンリレーの端子は6個なので2芯ケーブル3本で繋ぎました。今回は端子が6個なのに2芯ケーブル2本です。この場合は、3連スイッチをイメージすればわかると思いますが、
            電源側のイロハ間をわたり線で繋ぐ
            ことで線を2本減らすことができます。複線図は下記のようになります。リモコンリレーから出る線が4本になりましたね。
          </p>
        </div>
      </div>
    </>
  );
}
