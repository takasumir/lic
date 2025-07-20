"use strict";
import { render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import { init } from "./functions.js";

export function FukusenzuApp(props) {
  const canvas0 = useRef(null);
  const canvas1 = useRef(null);
  const fukusenzudiv = useRef(null);
  const [mondai, setMondai] = useState(null);
  const [kaisetsu, setKaisetsu] = useState(null);
  const [kaisetsuL, setKaisetsuL] = useState(0);

  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step === 0) {
      setStep(step + 1);
    } else if (step < kaisetsuL) {
      setStep(step << 1);
    }
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step >> 1);
    }
  };

  useEffect(() => {
    (async () => {
      const { Mondai, Kaisetsu, kaisetsuLength } = await import(
        `./Mondai_${props.examno}.tsx`,
        {
          with: {
            type: "tsx",
          },
        }
      );
      setKaisetsuL(kaisetsuLength);
      setMondai(<Mondai />);
      setKaisetsu(
        <Kaisetsu step={step} prevStep={prevStep} nextStep={nextStep} />,
      );
    })();

    init(
      canvas0.current.getContext("2d"),
      canvas1.current.getContext("2d"),
      props.examno,
      step,
    );
  }, [step]);

  return (
    <div key="fukusenzuapp" id="fukusenzuapp" ref={fukusenzudiv}>
      <h2 key="sld.h2" class="font-bold text-2xl mb-4">
        候補問題No.{props.examno}の単線図
      </h2>
      <canvas
        key="sld.cvs"
        id="0"
        ref={canvas0}
        style="width:100%; max-width:600px"
        width="1200"
        height="800"
      ></canvas>
      <div id="mondai" class="min-h-40">
        {mondai}
      </div>
      <h2 key="mld.h2" class="font-bold text-2xl mb-4">
        候補問題No.{props.examno}の複線図作成方法解説
      </h2>
      <canvas
        key="mld.cvs"
        id="1"
        ref={canvas1}
        style="width:100%; max-width:600px"
        width="1200"
        height="800"
        onClick={nextStep}
      ></canvas>
      <div id="kaisetsu" class="min-h-60">
        {kaisetsu}
      </div>
      <div key="prevnextstep" class="flex justify-end">
        <button
          onClick={prevStep}
          class="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-4 h-4 mr-1.5"
          >
            <path
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              fill="none"
              d="M 21 3 L 12 12 L 21 21"
              clip-rule="evenodd"
            />
          </svg>
          前へ
        </button>
        <button
          onClick={nextStep}
          class="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          次へ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-4 h-4 ml-1.5"
          >
            <path
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              fill="none"
              d="M 3 3 L 12 12 L 3 21"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
