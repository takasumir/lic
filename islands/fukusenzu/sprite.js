"use strict";
import {
  Sprite,
  linePainter,
  lineBehavior,
  timeBehavior,
  dotPainter,
  dotBehavior,
  elemPainter,
  elemBehavior,
  showBehavior,
} from "./class.js";
import { diagramData } from "./data.js";
import { drawDiagram } from "./functions.js";

export function genSp(diagramData, examno, step) {
  const thisExamData = diagramData[examno - 1].mld;
  if (step === 0) {
    return thisExamData.insts.map((v) => {
      return new Sprite(
        "inst",
        {
          paint: (sp, context) => {
            v[0](context, ...v.slice(1));
          },
        },
        [timeBehavior],
      );
    });
  } else if (thisExamData.lines.filter((v) => v[0] === step).length > 0) {
    return thisExamData.lines
      .filter((v) => v[0] === step)
      .map((v) => {
        switch (v[1]) {
          case "l":
            const line = new Sprite(v[1], linePainter, [lineBehavior]);
            Object.assign(line, { x1: v[2], y1: v[3], x2: v[4], y2: v[5] });
            if (v.length > 6) {
              line.strokeStyle = v[6];
            }
            if (v.length > 7) {
              line.or_strokeStyle = v[7];
            }
            return line;
            break;
          case "d":
            const dot = new Sprite(v[1], dotPainter, [dotBehavior]);
            Object.assign(dot, { x1: v[2], y1: v[3], r: v[4] });
            if (v.length > 5) {
              dot.strokeStyle = v[5];
              dot.fillStyle = v[5];
            }
            return dot;
            break;
        }
      });
  } else {
    return thisExamData.info
      .filter((v) => v[0] & step)
      .map((v) => {
        if (v[1] === "override") {
          const diagram = new Sprite(
            v[1],
            {
              paint: (sp, context) => {
                drawDiagram(context, diagramData, examno, "mld", step, true);
              },
            },
            [showBehavior],
          );
          return diagram;
        } else {
          const info = new Sprite(v[1], elemPainter, [timeBehavior]);
          info.data = v;
          return info;
        }
      });
  }
}

export function genSpBackup(arr) {
  return arr.map((v) => {
    if (typeof v[0] === "function") {
      const inst = new Sprite(
        "inst",
        {
          paint: (sp, context) => {
            v[0](context, ...v.slice(1));
          },
        },
        [timeBehavior],
      );
      return inst;
    } else if (v[1] === "l") {
      const line = new Sprite(v[1], linePainter, [lineBehavior]);
      Object.assign(line, { x1: v[2], y1: v[3], x2: v[4], y2: v[5] });
      if (v.length > 6) {
        line.strokeStyle = v[6];
      }
      if (v.length > 7) {
        line.or_strokeStyle = v[7];
      }
      return line;
    } else if (v[1] === "d") {
      const dot = new Sprite(v[1], dotPainter, [dotBehavior]);
      Object.assign(dot, { x1: v[2], y1: v[3], r: v[4] });
      if (v.length > 5) {
        dot.strokeStyle = v[5];
        dot.fillStyle = v[5];
      }
      return dot;
    }
  });
}
