export const kaisetsuLength = 0b0100000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.10を見ていきましょう。</p>
      <p>
        電源は単相100Vで、ブレーカーが頭にあります。ブレーカーより電源供給側は施工省略なので、ブレーカーの二次側から電源供給されると思って考えていけばよいです。
      </p>
      <p>
        この問題の特徴は、同時点滅の確認表示灯（パイロットランプ）です。同時点滅は、引掛シーリングやランプレセプタクルをスイッチで点滅させるのと同じことなので、ジョイントボックスを介さずスイッチの隣にあるので渡り線を使うことに注意だけすればわかりやすいと思います。
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
            <li>確認表示灯（パイロットランプ）は○で記載しています。</li>
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
            スイッチ以外の各機器に接地側の配線を繋いでいきましょう。電源の直後にブレーカがありますが、ブレーカの電源側は施工省略なのでブレーカの端子＝電源と考えてよいです。図では単に線がブレーカを通るように描いています。
          </p>
          <p>
            同時点滅のパイロットランプも他の機器と同様にスイッチで点滅させるので、接地側の線を繋ぎます。
          </p>
          <p>パイロットランプとコンセント間はわたり線で接続します。</p>
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
            コンセントとスイッチが同じ連用取付枠に付いているので、お互いを渡り線で接続します。これもどちらが先でも構いませんが今回はスイッチ→コンセントの順に繋ぎました。
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
            スイッチから点滅させる機器に接続していきます。引掛シーリング、ランプレセプタクル、確認表示灯（パイロットランプ）の3つに接続するわけですが、スイッチと同じ連用取付枠に確認表示灯があるので、スイッチと確認表示灯を渡り線で接続してから、残りの機器に繋いでいきます。
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
            ジョイントボックス内ジョイント部の線の本数を記入します。図は施工条件が差込形コネクタの場合で、線の本数のみ記載しリングスリーブの種類は記載していません。
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
            決まっていない線の色はジョイントボックスからスイッチ側に伸びた3本の線のうち、非接地側の2本です。施工条件で「電源から点滅器及びコンセントの非接地側電線には、すべて黒色を使用する」と指定されていますので、赤色はスイッチから機器へ行く線に決まります。
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
            第二種電気工事士技能試験の候補問題No.10の複線図は、確認表示灯（パイロットランプ）の「同時点滅」が他のランプレセプタクルなどの機器と同様の接続であることを理解できていれば施工は簡単です。確認表示灯（パイロットランプ）の常時点灯、同時点滅、異時点滅回路の違いを確認しておきましょう！
          </p>
        </div>
      </div>
    </>
  );
}
