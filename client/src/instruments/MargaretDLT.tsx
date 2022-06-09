// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useEffect } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import { appendFileSync } from 'fs';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Xylophone.
 ** ------------------------------------------------------------------------ */

 interface XylophoneKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  key1?: boolean;
  key2?: boolean;
  key3?: boolean;
  key4?: boolean;
  key5?: boolean;
  key6?: boolean;
  key7?: boolean;
  key8?: boolean;
  notC?: boolean;
  octave: number;
  index: number; // octave + index together give a location for the Xylophone key
}

export function XylophoneKey({
  note,
  synth,
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  notC,
  index,
}: XylophoneKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the Xylophone.
   * See `XylophoneKeyWithoutJSX` for the React component without JSX.
   */
  return (
      // Observations:
      // 1. The JSX refers to the HTML-looking syntax within TypeScript.
      // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
      // 3. The curly braces `{` and `}` should remind you of string interpolation.
      <div
        onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
        onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`
        className={classNames('ba pointer absolute dim', {
          'black bg-red hx8': key1,
          'black bg-orange hx7 mx1': key2,
          'black bg-yellow hx6 mx2': key3,
          'black bg-green hx5 mx3': key4,
          'black bg-blue hx4 mx4': key5,
          'black bg-purple hx3 mx5': key6,
          'black bg-gray hx2 mx6': key7,
          'black bg-black hx1 mx7': key8,
          'white': notC,
        })}
        style={{
          // CSS
          top: 0,
          left: `${index * 2.3}rem`,
          zIndex: 0,
          width: '2rem',
          marginLeft: 100,
        }}
      ></div>
  );
}

// eslint-disable-next-line
function XylophoneKeyWithoutJSX({
  note,
  synth,
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  index,
}: XylophoneKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `XylophoneKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black hx8': key1, 
        'black bg-red hx7': key2,
        'black bg-red hx6': key3,
        'black bg-red hx5': key4,
        'black bg-red hx4': key5,
        'black bg-red hx3': key6,
        'black bg-red hx2': key7,
        'black bg-red hx1': key8,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: 0,
        width: '2rem',
        marginLeft: 0,
      },
    },
    [],
  );
}

function XylophoneType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Xylophone({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keyHighC = List([
    { note: 'C', idx: 0 },
  ]);
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);

  const handleKeyPress = (event: { key: string; }) => {
    if(event.key === 's'){
      synth?.triggerAttack('C')
    }
    if(event.key === 'd'){
      synth?.triggerAttack('D')
    }
    if(event.key === 'f'){
      synth?.triggerAttack('E')
    }
    if(event.key === 'g'){
      synth?.triggerAttack('F')
    }
    if(event.key === 'h'){
      synth?.triggerAttack('G')
    }
    if(event.key === 'j'){
      synth?.triggerAttack('A')
    }
    if(event.key === 'k'){
      synth?.triggerAttack('B')
    }
    if(event.key === 'l'){
      synth?.triggerAttack('C4')
    }
  }
  const handleKeyStop = () => {
    synth?.triggerRelease('+0.25')
  }

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
  ]) as List<OscillatorType>;
  return (
    <div className="pv4"> 
     <div tabIndex={0} onKeyDown={handleKeyPress} onKeyUp={handleKeyStop}>
      <div className="relative dib h4 w-100 ml4"> 
        {Range(3,4).map(octave =>
          keys.map(key => { 
            const note = `${key.note}${octave}`;
            const isKey1 = key.note === 'C';
            const isKey2 = key.note === 'D';
            const isKey3 = key.note === 'E';
            const isKey4 = key.note === 'F';
            const isKey5 = key.note === 'G';
            const isKey6 = key.note === 'A';
            const isKey7 = key.note === 'B';
            return (
              <XylophoneKey
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                key1={isKey1}
                key2={isKey2}
                key3={isKey3}
                key4={isKey4}
                key5={isKey5}
                key6={isKey6}
                key7={isKey7}
                index={(octave - 2) * 2 + key.idx} 
        />
            );
          }),
        )}
      </div>
      <div className="dib h1 w-100 ml4"> 
                {Range(4,5).map(octave =>
                  keyHighC.map(key => { 
                  const note = `${key.note}${octave}`;
                  const isKey8 = key.note === 'C';
                  return (
                    <XylophoneKey
                      key={note} //react key
                      note={note}
                      synth={synth}
                      octave={octave}
                      key8={isKey8}
                      index={(octave) + 5.85} 
          />
          );
          }),
        )}
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <XylophoneType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
export const XylophoneInstrument = new Instrument('MargaretDLT', Xylophone);
 
