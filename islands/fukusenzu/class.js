"use strict";
import { drawElement } from "./functions.js";
// Sprite Classes
export class Sprite {
  constructor(name, painter, behaviors) {
    if (name !== undefined) this.name = name;
    if (painter !== undefined) this.painter = painter;
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.xt = 0;
    this.yt = 0;
    this.r = 0;
    this.t = 0;
    this.visible = false;
    this.animating = false;
    this.behaviors = behaviors || [];
    this.strokeStyle = "#222";
    this.fillStyle = "#fff";
    this.or_strokeStyle = "#222";
    this.or_fillStyle = "#fff";
    this.override = false;
  }
  paint(context) {
    if (this.painter !== undefined && this.visible) {
      this.painter.paint(this, context);
    }
  }
  update(context, time) {
    for (let i = 0; i < this.behaviors.length; ++i) {
      this.behaviors[i].execute(this, context, time);
    }
  }
}
export const linePainter = {
  paint(sprite, context) {
    context.save();
    if (
      context.canvas.dataset.override === "true" &&
      sprite.override === true
    ) {
      context.strokeStyle = sprite.or_strokeStyle;
      context.fillStyle = sprite.or_fillStyle;
    } else {
      context.strokeStyle = sprite.strokeStyle;
      context.fillStyle = sprite.fillStyle;
    }
    context.beginPath();
    context.moveTo(Math.round(sprite.x1), Math.round(sprite.y1));
    context.lineTo(
      Math.round(sprite.x1 + sprite.xt),
      Math.round(sprite.y1 + sprite.yt),
    );
    context.stroke();
    context.restore();
  },
};
export const lineBehavior = {
  execute(sprite, context, time) {
    let l = Math.sqrt(
      (sprite.x2 - sprite.x1) ** 2 + (sprite.y2 - sprite.y1) ** 2,
    );
    let vx = 0;
    let vy = 0;
    if (sprite.x2 === sprite.x1) {
      vy = sprite.y2 > sprite.y1 ? 1 : -1;
    } else if (sprite.y2 === sprite.y1) {
      vx = sprite.x2 > sprite.x1 ? 1 : -1;
    } else if (l !== 0) {
      vx = (sprite.x2 - sprite.x1) / l;
      vy = (sprite.y2 - sprite.y1) / l;
    }

    sprite.xt += vx;
    sprite.yt += +vy;
    if (
      Math.sqrt(
        (sprite.x1 + sprite.xt - sprite.x2) ** 2 +
          (sprite.y1 + sprite.yt - sprite.y2) ** 2,
      ) < 1
    ) {
      sprite.animating = false;
    }
  },
};
export const timeBehavior = {
  execute(sprite, context, time) {
    sprite.t++;
    if (sprite.t > 60) {
      sprite.visible = true;
      sprite.animating = false;
    }
  },
};
export const dotPainter = {
  paint(sprite, context) {
    context.save();
    if (
      context.canvas.dataset.override === "true" &&
      sprite.override === true
    ) {
      context.strokeStyle = sprite.or_strokeStyle;
      context.fillStyle = sprite.or_fillStyle;
    } else {
      context.strokeStyle = sprite.strokeStyle;
      context.fillStyle = sprite.fillStyle;
    }
    context.beginPath();
    context.arc(sprite.x1, sprite.y1, sprite.r, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    context.restore();
  },
};
export const dotBehavior = {
  execute(sprite, context, time) {
    if (sprite.animating === true) {
      sprite.animating = false;
    }
  },
};
export const elemPainter = {
  paint(sprite, context) {
    drawElement(context, sprite.data, "#222", true);
  },
};
export const elemBehavior = {
  execute(sprite, context, time) {
    if (sprite.animating === true) {
      sprite.animating = false;
    }
  },
};
export const showBehavior = {
  execute(sprite, context, time) {
    if (sprite.animating === true) {
      sprite.animating = false;
    }
  },
};

// Recorder
// Recorder
export class Recorder {
  static RECORDER_OPTIONS = { mimeType: "video/webm" };

  constructor(canvas, fps) {
    this.stream = canvas.captureStream(fps);
  }

  start() {
    this.recorder = new MediaRecorder(this.stream, Recorder.RECORDER_OPTIONS);
    this.recorder.start();
  }

  stop() {
    return new Promise((resolve) => {
      this.recorder.addEventListener("dataavailable", (e) => {
        let blob = e.data;
        let url = URL.createObjectURL(blob);
        resolve(url);
      });

      this.recorder.stop();
    });
  }

  pause() {
    this.recorder.pause();
  }

  resume() {
    this.recorder.resume();
  }
}
