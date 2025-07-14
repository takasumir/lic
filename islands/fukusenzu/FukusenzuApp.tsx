"use strict";
import { useState, useRef, useEffect } from "preact/hooks";
import { init } from "./functions.js";
import { Mondai_1, Kaisetsu_1 } from "./mondai_1.tsx";

function nextExamno(examno) {
  return examno >= 13 ? 1 : ++examno;
}
function prevExamno(examno) {
  return examno <= 1 ? 13 : --examno;
}

export function FukusenzuApp(props) {
  const [step, setStep] = useState(0);
  const canvas0 = useRef(null);
  const canvas1 = useRef(null);

  const nextStep = () => {
    if (step === 0) {
      setStep(step + 1);
    } else {
      setStep(step << 1);
    }
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step >> 1);
    }
  };

  useEffect(() => {
    console.log("use effect called.");
    init(
      canvas0.current.getContext("2d"),
      canvas1.current.getContext("2d"),
      props.examno,
      step,
    );
  }, [step]);

  return (
    <>
      <h2 class="font-bold text-2xl mb-4">候補問題No.{props.examno}の単線図</h2>
      <canvas
        id="0"
        ref={canvas0}
        style="width:100%; max-width:600px"
        width="1200"
        height="800"
      ></canvas>
      <h2 class="font-bold text-2xl mb-4">
        候補問題No.{props.examno}の複線図作成方法解説
      </h2>
      <Mondai_1 />
      <canvas
        id="1"
        ref={canvas1}
        style="width:100%; max-width:600px"
        width="1200"
        height="800"
        onClick={nextStep}
      ></canvas>
      <Kaisetsu_1 step={step} prevStep={prevStep} nextStep={nextStep} />

      {/*
      <div class="flex justify-center">
        <a
          href={nextExamno(props.examno)}
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
          前の問題 No.{prevExamno(props.examno)}
        </a>
        <a
          href={nextExamno(props.examno)}
          class="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          次の問題 No.{nextExamno(props.examno)}
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
        </a>
      </div>
        */}
    </>
  );
}
