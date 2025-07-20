export const kaisetsuLength = 0b10000000;

export function Mondai(props) {
  return (
    <>
      <p>候補問題No.4を見ていきましょう。</p>
      <p>
        今回のポイントは三相200V電源です。と言っても、施工省略のモーターに3本の線をそのまま繋ぐだけです。電源表示灯もありますが、常時点灯で3本のうち2本を施工条件に従い接続するだけです。100Vの方はごく普通の問題になっており、見かけによらず簡単な問題です。
      </p>
      <p>
        100V電源、三相200V電源はそれぞれブレーカ
        <span class="border-2 border-black p-1 mx-1">B</span>、
        <span class="border-2 border-black p-1 mx-1">BE</span>
        から供給され、試験ではこれらは端子台になっています。
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
                100V電源は非接地側を黒点●、接地側を白点○の2つの点で表現します。
              </li>
              <li>
                三相200V電源は、施工条件で指定された線の色に合わせて●を塗りつぶしています。
              </li>
              <li>
                モーター、電源表示灯、引掛けシーリング、スイッチ等の機器を並べます。
              </li>
              <li>
                ジョイントボックスは中に配線接続を描くので大きめの○で表現します。
              </li>
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
          <h2 class="font-bold text-lg mb-4">100V電源の接地側と機器を接続</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              スイッチ以外の機器に接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスからコンセントと引掛けシーリング「イ」へと線を繋ぎます。
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
            100V電源の非接地側をコンセント、スイッチと接続
          </h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              電源の非接地側はコンセントとスイッチに接続します。コンセント以外の機器は、スイッチを介して接続されます。この問題ではコンセントと、「イ」のスイッチ、引掛けシーリングのみです。
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
              スイッチから機器までを接続します。「イ」のスイッチから、「イ」の引掛けシーリングを繋ぎます。ジョイントボックス内ではジョイント（●）します。
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
          <h2 class="font-bold text-lg mb-4">三相200V電源をモーターへ接続</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              三相200V電源は、施工条件の指示通りにR相に赤色、S相に白色、T相に黒色（令和7年度上期試験）でジョイントボックスAを介してモーター
              <span class="border-2 border-black rounded-full p-1 mx-1 w-8 h-8 inline-flex justify-center items-center">
                M
              </span>
              へ接続します。S相は青ペン、R相は赤ペンで描いています。
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
          <h2 class="font-bold text-lg mb-4">電源表示灯の接続</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              最後は電源表示灯
              <span class="border-2 border-black rounded-full p-1 mx-1 w-8 h-8 inline-flex justify-center items-center">
                R
              </span>
              です。電源表示灯は、文字通り電源が来ていれば（漏電遮断器がONであれば）点灯するものなのでスイッチ等は無く、難しいことは考えずに施工条件に従い接続するだけでOKです。施工条件には「S相は接地されているものとし、S相とT相間に接続すること」（令和7年度上期試験）と記載があるのでそのとおりにジョイントボックスから電源表示灯へ配線を引きます。
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
          <h2 class="font-bold text-lg mb-4">情報の記入</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>ジョイント等の補足情報を書き込みます。</p>
            <p>
              その他の情報の記入は、前の<a href="./1">候補問題No.1</a>
              の記事に詳細を解説していますのでご参照ください。
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
          <h2 class="font-bold text-lg mb-4">
            決まっていない電線の色を決定する
          </h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              100V側のジョイントボックスとスイッチ・コンセント間の線が3本あります。接地側は白（図では青）で決まりですが残り2本のどちらかを赤にする必要があります。施工条件（令和7年度）では、
              <em>
                電源から点滅機、コンセント及びタイムスイッチまでの非接地側電線には、すべて黒色を使用する。
              </em>
              と指示がありましたのでその場合はスイッチの引掛けシーリング側が赤線になります。これで完成です！
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
          <h2 class="font-bold text-lg mb-4">まとめ</h2>
          <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
            <p>
              第二種電気工事士技能試験の候補問題No.4の複線図は、三相200V電源があるため難しく感じます。しかし、100V電源側と三相200V電源側の回路は独立しており、それぞれは非常に単純な配線になっていますので一度複線図を描いてみれば単純さを実感できるでしょう。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
