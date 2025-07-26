export const kaisetsuLength = 0b1000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.5を見ていきましょう。</p>
      <p>
        この問題のポイントは単相200V電源と接地端子を接地極付きコンセントへ接続するところです。見慣れない機器ですが単純にVVF2.0-3Cケーブル1本を直結するだけです。100V側はスイッチが2個あるのでそれぞれのスイッチと機器を正しく接続できるようにしましょう。
      </p>
      <p>
        100V電源、単相200V電源はそれぞれブレーカ
        <span class="border-2 border-black p-1 mx-1">B</span>、
        <span class="border-2 border-black p-1 mx-1">BE</span>
        から供給されます。試験では接地端子を含めた5つの接続箇所のある端子台を使います。
      </p>
      <p>
        三相200Vか単相200V+接地端子かの違いはありますが、試験問題No.4と似ていますね。
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
            <li>100V電源は非接地側を黒点●、接地側を白点○で記載します。</li>
            <li>
              単相200V電源は、特に色の指定は無いので白丸○で記載しています。接地端子は緑色の
              <svg class="inline-block mx-2" width="10" height="16">
                <circle
                  cx="5"
                  cy="8"
                  r="4"
                  stroke="#222"
                  stroke-width="2"
                  fill="#2f2"
                />
              </svg>
              で記載しています。
            </li>
            <li>蛍光灯、スイッチ等の機器を並べます。</li>
            <li>
              ジョイントボックスは中に配線接続を描くので大きめの○で表現します。図では点線で書いていますが、試験ではシャープペンシルで薄く描けばよいかと思います。
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
        <h2 class="font-bold text-lg">100V電源の接地側と機器を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            スイッチ以外の機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスからランプレセプタクル、コンセント、蛍光灯へ線を繋ぎます。
          </p>
          <p>
            非接地側の線を青色で書いていますが、非接地線の色はこの時点で決まるため、フリクションなどの消せるカラーボールペンで描いてしまうのがおすすめですよ！
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
          100V電源の非接地側をコンセント、スイッチと接続
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            電源の非接地側はコンセントとスイッチに接続します。コンセントとスイッチは、連用取付枠に一緒に取り付けるのでわたり線で繋ぎます。
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
        <h2 class="font-bold text-lg">スイッチと機器を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            イとロそれぞれのスイッチから蛍光灯（イ）、ランプレセプタクル（ロ）へ非接地側電源線を接続します。単相100V側はこれで完成です。
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
        <h2 class="font-bold text-lg">
          単相200V電源と接地端子をコンセントに接続
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            単相200V電源と接地端子からコンセント間は、黒/
            <span class="text-[#f22]">赤</span>/
            <span class="text-[#0a0]">緑</span>
            のVVF2.0-3Cケーブルで接続されます。施工条件に「接地線には
            <span class="text-[#0a0]">緑色</span>
            を使用する」と記載があります。残りの黒と
            <span class="text-[#f22]">赤</span>
            は特に指定なくどちらでもよいです。
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
            ジョイントボックス内のジョイント部は線の本数を記入しておきます。令和7年度上期試験では、施工条件で電線4本の接続部分のみ差込形コネクタ、その他3箇所がリングスリーブが指定されました。リングスリーブはVVF2.0とVVF1.6の接続は「小」の刻印、VVF1.6同士2本の接続は「○」の刻印です。
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
            決まっていない線の色を決めます。ジョイントボックスからスイッチ・コンセントへの線は4本です。VVF1.6-2Cケーブル2本で接続することになるので黒2本、白(図では青)2本になります。施工条件に
            <em>「電源からの接地側電線にはすべて白色を使用する」</em>、
            <em>
              「100V回路の電源から点滅機およびコンセントまでの非接地側電線には、すべて黒色を使用する。」
            </em>
            と指示があるので2本の色は決まります。残り2本、スイッチ「イ」から蛍光灯、スイッチ「ロ」からランプレセプタクルへ向かう線はどちらかが白、もう片方が黒になります。どちらを白にしても正解ですが、下の図ではスイッチ「イ」から蛍光灯への線を白(青)にしました。
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
            複線図が完成しました！第二種電気工事士技能試験の候補問題No.5の複線図は単相200V＋接地端子が見慣れない機器ですがコンセントへ直結するだけなので難しくありません。100V側はスイッチ、コンセントと基本的な構成なので落ち着いて複線図を描きましょう。
          </p>
        </div>
      </div>
    </>
  );
}
