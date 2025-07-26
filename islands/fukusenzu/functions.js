"use strict";
import { diagramData } from "./data.js";
import { genSp } from "./sprite.js";
// Global functions
const baseSize = 40;
let observer = null;
export function init(sldCtx, mldCtx, examno, step) {
  eraseBackground(sldCtx);
  sldCtx.save();
  sldCtx.scale(2, 2);
  drawDiagram(sldCtx, diagramData, examno, "sld", 0b00001, false);
  sldCtx.restore();
  if (observer !== null) {
    observer.unobserve(mldCtx.canvas);
    observer.disconnect();
  }
  observer = createObserver(examno, step);
  observer.observe(mldCtx.canvas);
}
export function eraseBackground(context) {
  context.save();
  context.resetTransform();
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.restore();
}
export function drawLine(context, x1, y1, x2, y2, color = "#222") {
  context.save();
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.restore();
}
export function addLabel(context, x, y, label = "", color = "#222") {
  context.save();
  context.font = Math.round(baseSize * 0.4) + "px sans-serif";
  context.fillStyle = color;
  context.fillText(label, x, y + baseSize * 0.4);
  context.restore();
}
export function drawDot(context, x, y, r, fill = "#fff", label = "") {
  context.save();
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI, false);
  context.save();
  context.fillStyle = fill;
  context.fill();
  context.restore();
  context.stroke();
  addLabel(context, x + r, y + r, label);
  context.restore();
}
export function drawC(context, x, y, text = "", label = "", rotate = 0) {
  let r = (baseSize / 2) * 1.3;
  if (text === "T") {
    r = baseSize / 2;
  }
  context.save();
  context.translate(x, y);
  if (text === "=") {
    context.scale(1 / 1.3, 1 / 1.3);
  }
  // draw a figure outside the circle
  if (text === "f") {
    context.fillRect(-baseSize, -baseSize / 4, baseSize * 2, baseSize / 2);
    context.strokeRect(-baseSize, -baseSize / 4, baseSize * 2, baseSize / 2);
    r = baseSize / 2;
    text = "";
  }
  // draw a circle
  context.beginPath();
  context.arc(0, 0, r, 0, 2 * Math.PI, false);
  context.fill();
  context.stroke();
  // draw a text or a figure inside the circle
  switch (text) {
    case "///":
      context.save();
      context.clip();
      context.beginPath();
      context.moveTo(-r, r);
      context.lineTo(r, -r);
      context.stroke();
      context.beginPath();
      context.moveTo(-r, r + r * 0.4);
      context.lineTo(r, -r + r * 0.4);
      context.stroke();
      context.beginPath();
      context.moveTo(-r, r - r * 0.4);
      context.lineTo(r, -r - r * 0.4);
      context.stroke();
      context.restore();
      break;
    case "||":
      context.save();
      if (rotate) {
        context.rotate(rotate);
      }
      context.clip();
      context.beginPath();
      context.arc(0, 0, r, (1 / 6) * Math.PI, (5 / 6) * Math.PI, false);
      context.save();
      context.fillStyle = "#222";
      context.fill();
      context.restore();
      context.beginPath();
      context.moveTo(-r * 0.33, r * 0.7);
      context.lineTo(-r * 0.33, -r);
      context.stroke();
      context.beginPath();
      context.moveTo(r * 0.33, r * 0.7);
      context.lineTo(r * 0.33, -r);
      context.stroke();
      context.restore();
      break;
    case "()":
      context.beginPath();
      context.arc(0, 0, baseSize / 3, -Math.PI / 3, Math.PI / 3);
      context.stroke();
      context.beginPath();
      context.arc(0, 0, baseSize / 3, (Math.PI * 2) / 3, (Math.PI * 4) / 3);
      context.stroke();
      break;
    case "*":
      context.save();
      context.clip();
      context.beginPath();
      context.moveTo(-r, r);
      context.lineTo(r, -r);
      context.stroke();
      context.beginPath();
      context.moveTo(-r, -r);
      context.lineTo(r, r);
      context.stroke();
      context.beginPath();
      context.arc(0, 0, r * 0.6, 0, 2 * Math.PI, false);
      context.fill();
      context.stroke();
      context.restore();
      break;
    case "=":
      drawEarth(context, 0, 0, label);
      break;
    default:
      context.fillStyle = "#222";
      context.font = Math.round(baseSize * 0.6) + "px sans-serif";
      const textArea = context.measureText(text);
      context.fillText(
        text,
        -textArea.width / 2,
        (textArea.actualBoundingBoxAscent - textArea.actualBoundingBoxDescent) /
          2,
      );
  }
  addLabel(context, r, r / 2, label);
  context.restore();
}
export function drawR(context, x, y, text = "", label = "") {
  let w;
  let h;
  switch (text) {
    case "B":
    case "BE": {
      w = baseSize;
      h = baseSize;
      break;
    }
    case "()": {
      w = baseSize * 1.6;
      h = baseSize;
      break;
    }
    case "BB":
      w = baseSize * 1.3;
      h = baseSize * 1.3;
      text = "B";
    default: {
      w = baseSize * 1.3;
      h = baseSize * 1.3;
    }
  }
  context.save();
  context.fillStyle = "#fff";
  context.strokeStyle = "#222";
  context.beginPath();
  context.fillRect(x - w / 2, y - h / 2, w, h);
  context.strokeRect(x - w / 2, y - h / 2, w, h);

  if (text === "()") {
    context.beginPath();
    context.arc(x, y, baseSize / 3, -Math.PI / 3, Math.PI / 3);
    context.stroke();
    context.beginPath();
    context.arc(x, y, baseSize / 3, (Math.PI * 2) / 3, (Math.PI * 4) / 3);
    context.stroke();
  } else {
    context.fillStyle = "#222";
    context.font = Math.round(baseSize * 0.6) + "px sans-serif";
    const textArea = context.measureText(text);
    context.fillText(
      text,
      x - textArea.width / 2,
      y +
        (textArea.actualBoundingBoxAscent - textArea.actualBoundingBoxDescent) /
          2,
    );
  }
  addLabel(context, x + w * 0.5, y + h * 0.5, label);
  context.restore();
}

// Multi line diagram
export function drawSup(context, x, y, angle = 0) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  drawDot(context, baseSize / 2, 0, baseSize / 8);
  drawDot(context, -baseSize / 2, 0, baseSize / 8, "#222");
  context.restore();
}
export function drawSup_4_5(context, x, y, kind = "4") {
  let color1;
  let color2;
  context.save();
  context.fillStyle = "#fff";
  context.strokeRect(60, 40, 60, 200);
  context.font = Math.round(40 * 0.4) + "px sans-serif";
  context.fillStyle = "#222";
  context.fillText("N", 75, 68);
  context.fillText("L", 75, 108);
  if (kind === "4") {
    context.fillText("T", 75, 148);
    context.fillText("S", 75, 188);
    context.fillText("R", 75, 228);
    context.fillText("電源", 10, 60);
    context.fillText("1φ2W", 10, 80);
    context.fillText("100V", 10, 100);
    context.fillText("電源", 10, 170);
    context.fillText("3φ3W", 10, 190);
    context.fillText("200V", 10, 210);
    color1 = "#222";
    color2 = "#f22";
  } else {
    /* kind === 5 */
    context.fillText("電源", 10, 80);
    context.fillText("100V", 10, 100);
    context.fillText("電源", 10, 160);
    context.fillText("200V", 10, 180);
    context.fillText("ET", 20, 225);
    drawLine(context, 60, 200, 120, 200);
    color1 = "#fff";
    color2 = "#2f2";
  }
  context.restore();
  drawLine(context, 60, 120, 120, 120);
  drawDot(context, 95, 60, 5, "#fff");
  drawDot(context, 95, 100, 5, "#222");
  drawDot(context, 95, 140, 5, color1);
  drawDot(context, 95, 180, 5, "#fff");
  drawDot(context, 95, 220, 5, color2);
}
export function drawSwitch(context, x, y, label = "", angle = 0) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.fillStyle = "#fff";
  context.strokeStyle = "#222";
  context.beginPath();
  context.moveTo(baseSize / 2, 0);
  context.lineTo((-baseSize / 2) * 0.7, (-baseSize / 2) * 0.7);
  context.stroke();
  context.beginPath();
  context.arc(-baseSize / 2, 0, baseSize / 8, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(baseSize / 2, 0, baseSize / 8, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.restore();

  if (angle === 0) {
    addLabel(context, x + baseSize / 2, y + baseSize / 6, label);
  } else {
    addLabel(context, x - 8, y + baseSize / 2 + 8, label);
  }
}
export function drawHSwitch(context, x, y, label = "") {
  context.beginPath();
  context.moveTo(x - baseSize / 2, y);
  context.lineTo(x - baseSize / 2, y - baseSize / 1.4);
  context.lineTo(x + baseSize / 2, y - baseSize / 1.4);
  context.lineTo(x + baseSize / 2, y);
  context.stroke();

  context.beginPath();
  context.arc(x, y - baseSize / 1.4, baseSize / 3.2, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  drawSwitch(context, x, y, label);
}
export function drawSwitch3(context, x, y, label = "", mirror = false) {
  context.save();
  context.translate(x, y);
  context.save();
  if (mirror === true) {
    context.scale(-1, 1);
  }
  context.beginPath();
  context.moveTo(-baseSize / 2, 0);
  context.lineTo(
    (baseSize / 2) * 0.7 + baseSize / 16,
    (baseSize / 2) * 0.7 - baseSize / 8,
  );
  context.stroke();
  drawDot(context, -baseSize / 2, 0, baseSize / 8);
  drawDot(context, baseSize / 2, baseSize * 0.35, baseSize / 8);
  drawDot(context, baseSize / 2, -baseSize * 0.35, baseSize / 8);
  context.restore();
  /* label */
  if (mirror === true) {
    addLabel(context, baseSize * 0.7, 0, "0");
    addLabel(context, -baseSize, -baseSize * 0.35, "3");
    addLabel(context, -baseSize, baseSize * 0.35, "1");
  } else {
    addLabel(context, -baseSize, 0, "0");
    addLabel(context, baseSize * 0.8, -baseSize * 0.35, "3");
    addLabel(context, baseSize * 0.8, baseSize * 0.35, "1");
  }
  addLabel(context, baseSize, 0, label);
  context.restore();
}
export function drawSwitch4(context, x, y, label = "") {
  context.save();
  context.translate(x, y);

  context.beginPath();
  context.moveTo(-baseSize / 2, baseSize * 0.35);
  context.lineTo(baseSize / 2, baseSize * 0.35);
  context.stroke();
  context.beginPath();
  context.moveTo(-baseSize / 2, -baseSize * 0.35);
  context.lineTo(baseSize / 2, -baseSize * 0.35);
  context.stroke();
  context.save();
  context.setLineDash([4, 2]);
  context.beginPath();
  context.moveTo(-baseSize / 2, baseSize * 0.35);
  context.lineTo(baseSize / 2, -baseSize * 0.35);
  context.stroke();
  context.beginPath();
  context.moveTo(-baseSize / 2, -baseSize * 0.35);
  context.lineTo(baseSize / 2, baseSize * 0.35);
  context.stroke();
  context.restore();
  drawDot(context, -baseSize / 2, baseSize * 0.35, baseSize / 8);
  drawDot(context, -baseSize / 2, -baseSize * 0.35, baseSize / 8);
  drawDot(context, baseSize / 2, baseSize * 0.35, baseSize / 8);
  drawDot(context, baseSize / 2, -baseSize * 0.35, baseSize / 8);

  /* label */
  addLabel(context, -baseSize, -baseSize, "1");
  addLabel(context, baseSize * 0.8, -baseSize, "2");
  addLabel(context, -baseSize, baseSize * 0.5, "3");
  addLabel(context, baseSize * 0.8, baseSize * 0.5, "4");

  addLabel(context, baseSize, baseSize * 0.8, label);
  context.restore();
}
export function drawBox(context, x, y, rx, ry, type = "C", label = "") {
  context.save();
  context.strokeStyle = "#222";
  context.setLineDash([4, 2]);
  if (type === "C") {
    context.beginPath();
    context.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
    context.stroke();
    addLabel(context, x + rx * 0.7, y + ry * 0.7, label);
  } else {
    context.strokeRect(x - rx, y - ry, 2 * rx, 2 * ry);
    addLabel(context, x + rx, y + ry, label);
  }
  context.restore();
}
export function drawEarth(context, x, y, label = "") {
  context.save();
  context.strokeStyle = "#222";
  drawLine(context, x, y + baseSize * 0.1, x, y - 15);
  drawLine(
    context,
    x - baseSize * 0.4,
    y + baseSize * 0.1,
    x + baseSize * 0.4,
    y + baseSize * 0.1,
  );
  drawLine(
    context,
    x - baseSize * 0.3,
    y + baseSize * 0.2,
    x + baseSize * 0.3,
    y + baseSize * 0.2,
  );
  drawLine(
    context,
    x - baseSize * 0.2,
    y + baseSize * 0.3,
    x + baseSize * 0.2,
    y + baseSize * 0.3,
  );
  addLabel(context, x + baseSize * 0.4, y, label);
  context.restore();
}
export function drawRemcon(context, x, y, label = "") {
  context.save();
  context.strokeStyle = "#222";
  context.fillStyle = "#fff";
  context.translate(x, y);
  context.fillRect(-baseSize / 4, -baseSize, baseSize / 2, baseSize * 2);
  context.strokeRect(-baseSize / 4, -baseSize, baseSize / 2, baseSize * 2);
  context.fillStyle = "#222";
  for (let i = 0; i < 3; i++) {
    context.save();
    context.translate(-baseSize / 4, -baseSize + (i * baseSize * 2) / 3);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(baseSize / 2, baseSize / 3);
    context.lineTo(0, (baseSize * 2) / 3);
    context.fill();
    context.restore();
  }
  addLabel(context, baseSize / 2, baseSize, label);
  context.restore();
}
export function drawRemconMulti(context, x, y, label = "") {
  const labels = ["イ", "ロ", "ハ"];
  context.save();
  context.strokeStyle = "#222";
  context.fillStyle = "#fff";
  context.translate(x, y);
  for (let i = -1; i < 2; i++) {
    context.save();
    context.translate(0, baseSize * i);
    //    context.fillRect(-baseSize, -baseSize/2, baseSize*3/2, baseSize);
    context.strokeRect(-baseSize, -baseSize / 2, (baseSize * 3) / 2, baseSize);
    drawDot(context, 0, -baseSize / 4, baseSize / 8);
    drawDot(context, 0, baseSize / 4, baseSize / 8);
    addLabel(context, -baseSize * 0.8, -10, labels[i + 1]);
    context.restore();
  }
  addLabel(context, baseSize / 2, baseSize, label);
  context.restore();
}
export function drawTerminal(context, x, y, label = "") {
  context.save();
  context.translate(x, y);
  context.strokeRect(-20, -60, 60, 120);
  drawDot(context, 0, 0, 8, "#fff");
  drawDot(context, 0, 40, 8, "#fff");
  drawDot(context, 0, -40, 8, "#fff");
  addLabel(context, 15, -48, "1");
  addLabel(context, 15, -8, "2");
  addLabel(context, 15, 32, "3");
  addLabel(context, 35, 65, label);
  context.restore();
}
export function drawRS(context, x, y, text = "", label = "") {
  /* TS internal */
  context.save();
  context.strokeStyle = "#222";
  context.translate(x, y);

  context.fillStyle = "#fff";
  context.beginPath();
  context.moveTo(-40, 70);
  context.lineTo(-40, 0);
  context.lineTo(40, 0);
  context.lineTo(40, 15);
  context.stroke();
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, 70);
  context.stroke();
  context.beginPath();
  context.moveTo(40, 50);
  context.lineTo(40, 70);
  context.stroke();
  context.save();
  context.beginPath();
  context.setLineDash([3, 3]);
  context.moveTo(0, 35);
  context.lineTo(35, 35);
  context.stroke();
  context.restore();

  drawDot(context, 0, 0, 5, "#222", "");
  drawDot(context, -40, 70, 5, "#fff", "");
  drawDot(context, 0, 70, 5, "#fff", "");
  drawDot(context, 40, 70, 5, "#fff", "");

  context.font = Math.round(baseSize * 0.4) + "px sans-serif";

  if (text === "TS") {
    context.beginPath();
    context.arc(0, 35, 14, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    const tw = context.measureText("M");
    context.fillStyle = "#222";
    context.fillText(
      "M",
      -tw.width / 2,
      35 + (tw.actualBoundingBoxAscent - tw.actualBoundingBoxDescent) / 2,
    );
  } else if (text === "AS") {
    context.beginPath();
    context.rect(-12, 25, 24, 16);
    context.fill();
    context.stroke();
    context.fillStyle = "#222";
    context.fillText("CdS回路", 5, 113);
    context.save();
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(15, 100);
    context.lineTo(6, 40);
    context.stroke();
    context.restore();
  }

  context.fillText("S1", -62, 92);
  context.fillText("S2", -22, 92);
  context.fillText("L1", 23, 92);
  context.fillText(label, baseSize + 10, baseSize * 1.6 + 10);

  context.translate(40, 35);
  context.scale(-1, 1);
  context.rotate(Math.PI / 2);
  context.fillStyle = "#fff";
  drawSwitch(context, 0, 0);
  context.restore();
}
export function drawElement(context, v, color = "#222", override = false) {
  context.save();
  context.strokeStyle = color;
  switch (v[1]) {
    case "l":
      if (override === true && v.length > 7) {
        context.strokeStyle = v[7];
      } else if (v.length > 6) {
        context.strokeStyle = v[6];
      }
      context.beginPath();
      context.moveTo(v[2], v[3]);
      context.lineTo(v[4], v[5]);
      context.stroke();
      break;
    case "ld":
      context.setLineDash([15, 3, 3, 3]);
      context.beginPath();
      context.moveTo(v[2], v[3]);
      for (let i = 4; i < v.length - 1; i += 2) {
        context.lineTo(v[i], v[i + 1]);
      }
      context.stroke();
      break;
    case "d":
      if (override === true && v.length > 6) {
        color = v[6];
        context.strokeStyle = v[6];
      } else if (v.length > 5) {
        color = v[5];
        context.strokeStyle = v[5];
      }
      drawDot(context, v[2], v[3], baseSize / 8, color);
      break;
    case "m":
      context.beginPath();
      context.moveTo(v[2], v[3]);
      break;
    case "r":
      context.arcTo(v[2], v[3], v[4], v[5], v[6]);
      context.lineTo(v[4], v[5]);
      context.stroke();
      break;
    case "t":
      context.save();
      context.translate(v[3], v[4]);
      if (v.length > 5) {
        context.rotate(v[5]);
      }
      addLabel(context, 0, 0, v[2], v[6] ?? "#222");
      context.restore();
      break;
    case "e":
      context.beginPath();
      context.ellipse(...v.slice(2));
      context.stroke();
      break;
    default:
      break;
  }
  context.restore();
}
export function drawElements(
  context,
  coords,
  flag,
  color = "#222",
  override = false,
) {
  context.save();
  context.lineWidth = 2;
  context.strokeStyle = color;
  context.fillStyle = color;
  /* sld=0b00000, minus=0b00001, plus1=0b00010, plus2=0b00100, extra1=-b01000, extra=-b10000 */
  for (const v of coords) {
    if (flag & v[0] || flag === 0b00000) {
      drawElement(context, v, color, override);
    }
  }
  context.restore();
}
export function drawInsts(context, insts) {
  context.save();
  context.lineWidth = 2;
  context.strokeStyle = "#222";
  context.fillStyle = "#fff";
  for (const i of insts) {
    i[0](context, ...i.slice(1));
  }
  context.restore();
}
export function drawDiagram(
  context,
  data,
  examno,
  sldOrMld = "sld",
  flag = 0b00000,
  override = false,
) {
  const invisible = data[examno - 1][sldOrMld].lines.filter(
    (v) => v[0] & flag && v[1] === "invisible",
  );
  const extract = invisible.length > 0 ? invisible[0][2] : 0;

  const lines = data[examno - 1][sldOrMld].lines.filter(
    (v) => (v[0] & flag) ^ extract,
  );

  const insts = data[examno - 1][sldOrMld].insts;
  const info = data[examno - 1][sldOrMld].info.filter((v) => v[0] & flag);
  drawElements(context, lines, flag, "#222", override);
  if (flag !== null) drawInsts(context, insts);
  drawElements(context, info, flag, "#222", override);
}

// Animation
let aminationId = null;
function animate(time, entry, examno, step, sprites, override = false) {
  const now = +new Date();
  let animatingContext = entry.target.getContext("2d");
  if (entry.target.dataset.paused !== "true") {
    eraseBackground(animatingContext);
    // 現在のCanvasでアニメーションするSpritesを更新、描画
    sprites.forEach((sprite, index, array) => {
      if (sprite.animating === true) {
        sprite.update(animatingContext, now);
      }
      if (sprite.visible === true) {
        sprite.paint(animatingContext);
      }
      if (
        sprite.animating === false &&
        sprite.visible === true &&
        index < array.length - 1
      ) {
        if (array[index + 1].visible === false) {
          array[index + 1].visible = true;
          array[index + 1].animating = true;
        }
      }
    });

    // 始めから表示しておくSprites
    // drawElements(animatingContext, diagramData[examno - 1].mld.lines, step - 1);
    const prevStep = step === 0 ? null : step - 1;
    drawDiagram(
      animatingContext,
      diagramData,
      examno,
      "mld",
      prevStep,
      override,
    );

    // finish or next animation frame
    if (
      sprites.every(function (val, index, array) {
        return !val.animating;
      })
    ) {
      //      initializeAnimation(entry, examno, step);
      stopAnimation(entry);
    } else {
      aminationId = window.requestAnimationFrame(() => {
        animate(time, entry, examno, step, sprites, override);
      });
    }
  }
}
function stopAnimation(entry) {
  entry.target.dataset.paused = "true";
}
function initializeAnimation(entry, examno, step) {
  if (aminationId) {
    cancelAnimationFrame(aminationId);
  }
  let animatingContext = entry.target.getContext("2d");
  animatingContext.reset();
  animatingContext.scale(2, 2);
  animatingContext.lineWidth = 2;
  animatingContext.strokeStyle = "#222";
  animatingContext.fillStyle = "#fff";

  const sprites = genSp(diagramData, examno, step);
  if (sprites.length > 0) {
    sprites[0].animating = true;
    sprites[0].visible = true;
    let override = false;
    if (sprites[0].name === "override") override = true;
    /* timer */
    const startTime = +new Date();
    entry.target.dataset.paused = "false";
    animate(startTime, entry, examno, step, sprites, override);
  } else {
    eraseBackground(animatingContext);
    drawDiagram(animatingContext, diagramData, examno, "mld", step - 1, true);
  }
}
function toggleAnimation(entries, examno, step) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initializeAnimation(entry, examno, step);
    } else {
      stopAnimation(entry);
    }
  });
}
function createObserver(examno, step) {
  // Intersection Obserber
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initializeAnimation(entry, examno, step);
        } else {
          stopAnimation(entry);
        }
      });
    },
    {
      threshold: 0.75,
    },
  );
  return observer;
}
