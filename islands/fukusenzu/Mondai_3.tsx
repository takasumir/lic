export const kaisetsuLength = 0b100000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.3を見ていきましょう。</p>
      <p>
        まず最初に目につくのが、見慣れない
        <span class="border-2 border-black p-1 mx-1">TS</span>
        の記号。これは「タイムスイッチ」です。ぱっと見不安になりますが実はただの端子台です。タイムスイッチが端子台であることを理解すれば非常にシンプルな問題で、複線図も描きやすく施工も簡単です。
      </p>
      <p>
        タイムスイッチは、当日の試験問題で「タイムスイッチ代用の端子台の説明図」に内部結線図が示されます。接続方法は後ほど説明します。
      </p>
    </>
  );
}

export function Kaisetsu({ step, prevStep, nextStep }) {
  return (
    <>
      {/*Step: {step.toString(2)}*/}
      <div
        class={`items-start gap-2.5 ${step === 0b00000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">機器を並べる</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>まずは機器を並べていきましょう。</p>
            <ul class="list-disc list-inside my-2">
              <li>
                電源は非接地側を黒点●、接地側を白点○の2つの点で表現します。
              </li>
              <li>
                引掛けシーリング、ランプレセプタクル、コンセント、アースは単線図の記号通り。
              </li>
              <li>スイッチは両側を白点○でスイッチ記号を描きます。</li>
              <li>
                ジョイントボックスは中に配線接続を描くので大きめの○で表現します。
              </li>
              <li>タイムスイッチは問題文の図をそのまま書き写しましょう。</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b00001 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">電源の接地側と機器を接続</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              スイッチ以外の機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスから機器へと線を繋ぎます。ジョイントボックス内では必ず線同士をリングスリーブか差し込みコネクタで接続するため、接続記号を●で表現します。
            </p>
            <p>
              接地側の配線色は「白色」と決まっていますが、図では青色で記載しています。実際の試験でも色をつけておくと分かりやすいです。
            </p>
            <p>タイムスイッチは後ほど解説しますのでここでは飛ばします。</p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b00010 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">
            電源の非接地側をコンセント、スイッチと接続
          </h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              電源の非接地側はコンセントとスイッチに接続します。コンセント以外の機器は、スイッチを介して接続されます。タイムスイッチもスイッチの一種ですが、後ほど説明します。
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b00100 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">スイッチと機器を接続</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              スイッチから機器までを接続します。「ロ」のスイッチから、「ロ」のランプレセプタクルへ繋げます。途中でジョイントボックスを2箇所通るため、ジョイントボックス内ではジョイント（●）します。
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b01000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">タイムスイッチの接続（接地側）</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              さて、問題のタイムスイッチとタイムスイッチで点滅する引掛けシーリング「イ」が残っています。
            </p>
            <p>
              まず接地側ですが、引掛けシーリング「イ」に必要です。タイムスイッチをよく見ると、
              <span class="border-2 border-black rounded-full p-1 mx-1 w-8 h-8 inline-flex justify-center items-center">
                M
              </span>
              があります。これはスイッチを駆動するためのモーターで、接地側、非接地側両方の配線が必要です。
            </p>
            <p>
              スイッチは非接地側に接続しますが、L1,
              S1が、スイッチに接続されていることを考えると、S2が接地側になります。単線図でタイムスイッチと引掛けシーリングはケーブルでつながっているため、引掛けシーリングの接地側は、S2から取ることになります。
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b10000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">
            タイムスイッチの接続（非接地側）
          </h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              非接地側は、スイッチを開閉する
              <span class="border-2 border-black rounded-full p-1 mx-1 w-8 h-8 inline-flex justify-center items-center">
                M
              </span>
              に常時電源が必要なことを考えると、電源側をS1に繋ぐことになります。
            </p>
            <p>
              S1からスイッチを介してL1側を引掛けシーリングと接続することになります。ここは通常のスイッチと同じ考え方ですね。
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b100000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">コンセントのアースの接続</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              コンセントからアースに電線を接続します。通常、電線の色は緑色を指定されますが当日の問題分で施工条件を確認することを忘れないようにしましょう。
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b1000000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">情報の記入</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>ここまで来たら、ジョイント等の補足情報を書き込みます。</p>
            <p>
              その他の情報の記入は、前の<a href="./1">候補問題No.1</a>
              の記事に詳細を解説していますのでご参照ください。ここでは結果のみを記載します。
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b10000000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">
            決まっていない電線の色を決定する
          </h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              ジョイントボックス間の線が3本あります。接地側は白（図では青）で決まりですが残り2本のどちらかを赤にする必要があります。実際の試験では「施工条件」に指示があるため、よく「施工条件」を読みましょう。2025年度（令和6年度）上期の出題では、
              <em>
                電源から点滅機、コンセント及びタイムスイッチまでの非接地側電線には、すべて黒色を使用する。
              </em>
              と指示がありましたのでその場合はスイッチ「ロ」の先が赤線になります。これで完成です！
            </p>
          </div>
        </div>
      </div>

      <div
        class={`items-start gap-2.5 ${step === 0b100000000 ? "flex" : "hidden"}`}
      >
        <img
          class="w-24 h-24 rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <div>
          <h2 class="font-bold text-lg mb-4">まとめ</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              第二種電気工事士技能試験の候補問題No.3の複線図は、タイムスイッチがあることで難しく感じます。タイムスイッチの中は、スイッチと、スイッチを駆動するモーターで構成されることを読み取ることで、スイッチOFFの状態でもモーターには接地、非接地両側の線が接続されている必要があり、スイッチは非接地側に接続されることが分かります。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
