export const kaisetsuLength = 0b1000000;

export function Mondai(props) {
  return (
    <div key="mondai">
      <p>候補問題No.1の単線図です。これを複線図にしてみましょう。</p>
      <p>
        この問題は3つのスイッチがそれぞれ別々の機器を点滅させるようになっており、特別難しい回路ではありませんが、1つの取付枠に3つのスイッチを全て取り付けるので、スイッチの電源側はわたり線で繋ぐところがポイントです。
      </p>
      <p>
        複線図を描く際は紙とシャープペンシル、そしてフリクションなどの消せるカラーボールペンか蛍光ペンなどのカラーも2色程度用意しておくのがおすすめです。
      </p>
    </div>
  );
}

export function Kaisetsu({ step, prevStep, nextStep }) {
  return (
    <div key="kaisetsu">
      {/*Step: {step.toString(2)}*/}
      <div
        key="0b00000"
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">機器を並べる</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>まずは候補問題通りに機器を並べていきます。</p>
          <ul class="list-disc list-inside my-2">
            <li>電源は非接地側を黒点●、接地側を白点○の2つの点で表現します。</li>
            <li>
              引掛けシーリング、ランプレセプタクル、蛍光灯は単線図の記号通り。
            </li>
            <li>スイッチは両側を白点○でスイッチ記号を描きます。</li>
            <li>
              常時点灯のホタルスイッチがありますすが、ランプ付きのスイッチを使うだけなのであまり気にしなくて良いです。
            </li>
            <li>
              ジョイントボックスは中に配線接続を描くので大きめの○で表現します。上図では点線ですが、試験ではシャープペンシルで薄い丸を描くのが良いかとおもいます。
            </li>
          </ul>
        </div>
      </div>

      <div
        key="0b00001"
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
            機器を並べたらまず接地側の配線を繋いでいきましょう。電源からジョイントボックスへ、ジョイントボックスから機器へと線を繋ぎます。ジョイントボックス内では必ず線同士をリングスリーブか差し込みコネクタで接続するため、接続記号を●で表現します。
          </p>
          <p>
            接地側の配線色は「白色」と決まっていますが、図では青色で記載しています。実際の試験でもこのステップはフリクションカラーボールペンなどで色をつけておくと分かりやすいのでおすすめです。
          </p>
        </div>
      </div>

      <div
        key="0b00010"
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00010 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">電源の非接地側とスイッチを接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            非接地側はスイッチを介して電源と機器と接続します。まずは電源からスイッチまでを繋いでいきましょう。ポイントは、同じ箇所にある2連、3連スイッチはスイッチ間でわたり配線で接続することろです。
          </p>
          <p>
            電源からスイッチまでの線は通常、施工条件で黒色を使うよう指定されます。
          </p>
        </div>
      </div>

      <div
        key="0b00100"
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b00100 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">スイッチと機器を接続</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>スイッチから機器までは接地側と同様に繋いでいけばよいです。</p>

          <p>
            <span class="font-bold">配線が繋がりました！</span>
            配線が接続され、ほぼ完成です。複線図を見慣れている方であればこのまま制作にかかってもよいかと思いますが、間違え防止のために下記情報を追記していきます。
          </p>
          <ul class="list-disc list-inside my-2">
            <li>使用するケーブルの情報</li>
            <li>電線の色</li>
            <li>ジョイントボックス内の各配線接続の本数</li>
            <li>圧着端子の種類</li>
          </ul>
        </div>
      </div>

      <div
        key="0b01000"
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b01000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">使用するケーブルの情報を記入する</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            使用するケーブルは、問題の単線図に記載されていますので、単純にケーブル種類と芯数、長さを複線図に写します。
          </p>
        </div>
      </div>

      <div
        key="0b10000"
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b10000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">
          ケーブルの組み合わせとコードの色を決める
        </h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            ジョイントボックスとスイッチ間の4本線とジョイントボックスとジョイントボックス間の3本線の色が決まっていません。
          </p>
          <h3 class="font-bold">ジョイントボックスとスイッチ間</h3>
          <p>
            ジョイントボックスとスイッチ間の電線は4本あります。試験では2芯ケーブル2本を使います。
          </p>
          <p>
            問題文の施工条件で電源からスイッチまでの非接地側電線は黒色と指定されていますので、図でスイッチの左側の線とわたり線は黒色に決まります。
          </p>
          <p>
            残り3本の電線に対し、白、白、黒をどう使うかは特に規定はありません。下図のように白線と黒線を振り分けました。（注：図では、白線を青色で描いています）
          </p>
          <h3 class="font-bold">ジョイントボックス間</h3>
          <p>左右ジョイントボックス間の3本の電線には3芯ケーブルを使います。</p>
          <p>
            接地側は白色に決まりです。残り赤、黒2本は規定は無くどちらでもよいです。今回は図のように割り当てました。
          </p>
        </div>
      </div>

      <div
        key="0b100000"
        class={`grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] items-center gap-2.5 ${step === 0b100000 ? "grid" : "hidden"}`}
      >
        <img
          class="w-14 h-14 md:w-24 md:h-24 md:row-span-2 self-start rounded-full"
          src="/electrician-2/electrician-girl-face.webp"
          alt="電気工事士の女の子の顔"
        />
        <h2 class="font-bold text-lg">ジョイントの情報を書き込む</h2>
        <div class="col-span-2 md:col-span-1 flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p>
            最後にジョイントボックス内のジョイント部について、線の本数とリングスリーブの種類を書き込みます。
          </p>
          <p>
            有名どころのHOZANの説明ではリングスリーブの種類（○、小、中）のみ書いていますが、自己流ですが線の本数も記入しています。実際の試験ではフリーハンドで複線図を描くのでごちゃごちゃしているので3本のところを2本で繋げてしまいそうになったりするため、本数も書いておくのを個人的にはおすすめします。また、見やすいように色を変えて書くのもおすすめです。
          </p>
          <p>
            この問題での施工条件は、図の左側のジョイントボックスにはリングスリーブ（リングスリーブ）を使い、右側には差込型コネクタを使うよう指示されていますが、問題文をよく読んで逆にしないよう注意しましょう！
          </p>
        </div>
      </div>

      <div
        key="0b1000000"
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
            複線図が完成しました！ここまで描いたらあとは複線図の通りに施工するだけです。複線図は5分から遅くとも10分以内に描く必要がありますが、課題があらかじめ公表されているので何回か描いてみたらサッと描けるようになるため繰り返し練習が重要です。
          </p>
        </div>
      </div>
    </div>
  );
}
