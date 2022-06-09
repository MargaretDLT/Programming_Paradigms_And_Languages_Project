// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const WaveformVisualizer2 = new Visualizer(
  'MargaretDLT',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    p5.stroke(113, 0, 213, 255);
       
    const values = analyzer.getValue();
    p5.beginShape();
    p5.noFill(); 
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      //circle head
      const x = p5.map(i, 0, values.length - 1, 334, 334);
      const y = 150 + amplitude * height/6;
      p5.ellipse(x, y, 70, 70);
      //line body
      const x2 = 334 + amplitude * height/4;
      const y2 = p5.map(i, 0, values.length + height, 185, 400);
      p5.vertex(x2, y2);
    }
    p5.endShape();

    //left eye
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 320, 320);
      const y = 140 + amplitude * height/8;
      p5.ellipse(x, y, 10, 10);
    }
    p5.endShape();

    //right eye
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 350, 350);
      const y = 140 + amplitude * height/8;
      p5.ellipse(x, y, 10, 10);
    }
    p5.endShape();

    //mouth
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const x = p5.map(i, 0, values.length + height, 315, 405);
        const y = 165 + amplitude * height/4;
        p5.vertex(x, y);
      }
    p5.endShape();

    //left arm
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //bottom
        const x1 = 334;
        const y1 = p5.map(i, 10, values.length + height, 230, 230);
        p5.vertex(x1, y1)
        //top
        const x2 = 285 + amplitude/8 * height;
        const y2 = 200;
        p5.vertex(x2,y2)
      }
    p5.endShape();

    //right arm
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //right arm top
        const x1 = 380 + amplitude/8 * height;
        const y1 = 200;
        p5.vertex(x1, y1)
        //right arm bottom
        const x2 = 334;
        const y2 = p5.map(i, 10, values.length + height, 230, 230);
        p5.vertex(x2,y2)
      }
    p5.endShape();

    //left leg
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //top
        const x1 = 334; 
        const y1 = p5.map(i, 10, values.length + height, 275, 275);
        p5.vertex(x1, y1)
        //bottom
        const x2 = 290 + amplitude/8 * height;
        const y2 = 320;
        p5.vertex(x2,y2)
      }
    p5.endShape();

    //right leg
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //bottom
        const x1 = 380 + amplitude/8 * height;
        const y1 = 320;
        p5.vertex(x1, y1)
        //top
        const x2 = 334;
        const y2 = p5.map(i, 10, values.length + height, 275, 275);
        p5.vertex(x2,y2)
      }
    p5.endShape();

    //boombox box
    p5.beginShape();
    p5.stroke(300, 0, 213, 255);
    const x = 90;
    const y = 270;
    const w = 120;
    const h = 50;
    p5.rect(x, y, w, h)
    p5.endShape();
  
    //boombox handle
    p5.beginShape();
    p5.stroke(300, 0, 213, 255);
    const x1 = 125;
    const y1 = 250;
    const x2 = 175;
    const y2 = 250;
    p5.line(x1, y1, x2, y2);
    p5.endShape();

    //left handle 
    p5.beginShape();
    p5.stroke(300, 0, 213, 255);
    const x1lh = 125;
    const y1lh = 250;
    const x2lh = 120;
    const y2lh = 270;
    p5.line(x1lh, y1lh, x2lh, y2lh);
    p5.endShape();

    //right handle 
    p5.beginShape();
    p5.stroke(300, 0, 213, 255);
    const x1rh = 175;
    const y1rh = 250;
    const x2rh = 180;
    const y2rh = 270;
    p5.line(x1rh, y1rh, x2rh, y2rh);
    p5.endShape();

    //boombox left circle
    p5.beginShape();
    p5.stroke(300, 0, 213, 255);
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 120, 120);
      const y = 295 + amplitude * height/8;
      const w = 26;
      const h = 26;
      p5.ellipse(x, y, w, h)
    }
    p5.endShape();

    //boombox right circle
    p5.beginShape();
    p5.stroke(300, 0, 213, 255);
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const x = p5.map(i, 0, values.length - 1, 180, 180);
        const y = 295 + amplitude * height/8;
        const w = 26;
        const h = 26;
        p5.ellipse(x, y, w, h)
      }
    p5.endShape();

    //note left cirle
    p5.beginShape();
    p5.fill(50, 100, 50, 200)
    p5.stroke(50, 100, 50, 200);
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const xcircle = p5.map(i, 0, values.length - 1, 440, 440);
        const ycircle = 120 + amplitude * height/10;
        const wcircle = 30;
        const hcircle = 30;
        p5.ellipse(xcircle, ycircle, wcircle, hcircle)
      }
    p5.endShape();

    //note right cirle
    p5.beginShape();
    p5.fill(50, 100, 50, 200)
    p5.stroke(50, 100, 50, 200);
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const xcircle2 = p5.map(i, 0, values.length - 1, 520, 520);
        const ycircle2 = 107 + amplitude * height/8;
        const wcircle2 = 30;
        const hcircle2 = 30;
        p5.ellipse(xcircle2, ycircle2, wcircle2, hcircle2)
      }
    p5.endShape();

    //note left line 
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const xnLine1 = 450 + amplitude * height/4;
      const ynLine1 = p5.map(i, 0, values.length + height, 50, 190);
      p5.vertex(xnLine1, ynLine1);
    }
    p5.endShape();

    //note right line 
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const xnLine2 = 530 + amplitude * height/4;
      const ynLine2 = p5.map(i, 0, values.length + height, 25, 250);
      p5.vertex(xnLine2, ynLine2);
    }
    p5.endShape();

    //note top line 
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //right
        const xtop1 = 530 + amplitude/8 * height;
        const ytop1 = p5.map(i, 10, values.length + height, 25, 25);
        p5.vertex(xtop1, ytop1)
        //left
        const xtop2 = 450 + amplitude * height/4;
        const ytop2 = p5.map(i, 10, values.length + height, 50, 50);
        p5.vertex(xtop2,ytop2)
      }
    p5.endShape();
    
    //note2 cirle
    p5.beginShape();
    p5.fill(50, 100, 50, 200)
    p5.stroke(50, 100, 50, 200);
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const xcircle2 = p5.map(i, 0, values.length - 1, 577, 577);
        const ycircle2 = 90 + amplitude * height/8;
        const wcircle2 = 30;
        const hcircle2 = 30;
        p5.ellipse(xcircle2, ycircle2, wcircle2, hcircle2)
      }
    p5.endShape();
    
    //note2 left line 
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const xn2Line = 590 + amplitude * height/4;
      const yn2Line = p5.map(i, 0, values.length + height, 25, 190);
      p5.vertex(xn2Line, yn2Line);
    }
    p5.endShape();

    //note2 top line 
    p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //right
        const xn2top1 = 610 + amplitude/8 * height;
        const yn2top1 = p5.map(i, 10, values.length + height, 30, 30);
        p5.vertex(xn2top1, yn2top1)
        //left
        const xn2top2 = 590 + amplitude * height/4;
        const yn2top2 = p5.map(i, 10, values.length + height, 25, 25);
        p5.vertex(xn2top2,yn2top2)
      }
    p5.endShape();

  },
);

