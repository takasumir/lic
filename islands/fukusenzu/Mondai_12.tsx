export const kaisetsuLength = 0b0100000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.12を見ていきましょう。</p>
      <p>
        候補問題No.12は、候補問題No.11と似た問題です。違いはジョイントボックスが1つ増えて2つになったこと、金属管では無く合成樹脂製可とう管(PF16)を使うことです。複線図としては、ジョイントボックスが1つ増えただけなので候補問題No.11ができれば同じように描くことができます。
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
              電源、引掛シーリング、ランプレセプタクル、コンセント、スイッチを並べていきます
            </li>
            <li>
              ジョイントボックスAは、大きな点線で丸を、ジョイントボックスB（アウトレットボックス）は、大きめの点線で四角を描いています。
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
            接地側の配線をジョイントボックスを介しスイッチ以外の各機器に繋いでいきましょう。非接地側の線は施工条件で白色を指定されるため、（白の変わりに）青色で描いています。
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
            コンセントとスイッチ「ロ」が同じ連用取付枠に付いているので、お互いを渡り線で接続します。
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
            スイッチから機器へ接続していきます。スイッチ「イ」からジョイントボックスを経由して引掛シーリングへ接続。スイッチ「ロ」も同様にランプレセプタクルへ接続します。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b001000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">情報の記入</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            ジョイントボックス内ジョイント部の線の本数とリングスリーブの種類を記入します。施工条件でジョイントボックスAに差込形、Bにリングスリーブを指定された場合を記載しています。
          </p>
        </div>
      </div>

      <div
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b0010000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">線の色を決定する</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            決まっていない線の色を決めます。1つ目はジョイントボックスBからスイッチ「イ」に伸びた2本の線です。施工条件で電源から点滅器の非接地側電線には、すべて黒色を使用する、と指定されていますので、スイッチから引掛シーリングへの線が白色になります。
          </p>
          <p>
            2つ目はジョイントボックスBからスイッチ「ロ」側3本の線のうち、非接地側2本の線どちらかが赤になります。施工条件で電源からコンセントの非接地側電線は黒色と指定されているためスイッチからランプレセプタクル側が赤色になります。
          </p>
          <p>
            3つ目はにジョイントボックス間の3本の線です。ここは特に指定は無いため、非接地側2本のうち、どちらを赤色にしても構いません。今回はスイッチ「ロ」から赤色で続くようにしてみました。
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
        <h2 class="font-bold text-lg">完成</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            第二種電気工事士技能試験の候補問題No.12の複線図は、候補問題No.11同様シンプルで易しい問題です。アウトレットボックスの施工がやや面倒なので早めに複線図を描けるようにしておきましょう。
          </p>
        </div>
      </div>
    </>
  );
}
