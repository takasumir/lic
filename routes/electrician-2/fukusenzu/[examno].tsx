// import { PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";
import { FukusenzuApp } from "../../../islands/fukusenzu/FukusenzuApp.tsx";

function nextExamno(examno) {
  return examno >= 4 ? 1 : ++examno;
}
function prevExamno(examno) {
  return examno <= 1 ? 4 : --examno;
}

export default async function Fukusenzu(req: Request, ctx: RouteContext) {
  return (
    <>
      <Head>
        <title>
          第二種電気工事士 複線図の描き方 - 候補問題No.{ctx.params.examno}
        </title>
        <meta
          name="description"
          content="第二種電気工事士技能試験の候補問題No.{props.params.examno}を題材として、}単線図から複線図を作成する方法を解説します。"
        />
      </Head>
      <header className="px-4 pt-16 pb-8 mx-auto bg-[#86efac]">
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            className="my-6"
            src="/electrician-2/circuit.webp"
            width="1280"
            height="854"
            alt="回路図のイラスト"
          />
          <h1 className="text-4xl font-bold">
            第二種電気工事士
            <br />
            複線図 候補問題No.{ctx.params.examno} の解説
          </h1>
        </div>
      </header>
      <main className="max-w-screen-md mx-4 md:mx-auto py-6">
        <p className="mb-4">
          第二種電気工事士技能試験の候補問題No.{ctx.params.examno}
          の単線図から複線図を作成する方法を解説します。
        </p>
        <FukusenzuApp examno={parseInt(ctx.params.examno)}></FukusenzuApp>
        <div key="nextprevnav" class="flex justify-center">
          <a
            href={prevExamno(ctx.params.examno)}
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
            前の問題 No.{prevExamno(ctx.params.examno)}
          </a>
          <a
            href={nextExamno(ctx.params.examno)}
            class="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            次の問題 No.{nextExamno(ctx.params.examno)}
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
      </main>
    </>
  );
}
