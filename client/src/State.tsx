// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { XylophoneInstrument } from './instruments/MargaretDLT';
import { WaveformVisualizer2 } from './visualizers/MargaretDLT';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, XylophoneInstrument]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, WaveformVisualizer2]);    // similar to Visualizer[]


/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
//  const drumSounds = List([
//   {type: 'clap1' , sound: './sound/clap-1.wav'},
//   {type: 'clap2' , sound: './sound/clap-1.wav'},
//   {type: 'cymbal' , sound: './sound/cymbal.wav'},
//   {type:'hihat1' , sound: './sound/hihat-close.wav'},
//   {type:'hihat2' , sound: './sound/hihat-closed.wav'},
//   {type:'hihat3' , sound: './sound/hihat-open-1.wav'},
//   {type:'hihat4' , sound: './sound/hihat-open-2.wav'},
//   {type:'kick1' , sound: './sound/kick-short.wav'},
//   {type:'kick2' , sound: './sound/kick.wav'},
//   {type:'ride' , sound: './sound/ride.wav'},
//   {type:'rim' , sound: './sound/rim.wav'},
//   {type:'snare' , sound: './sound/snare.wav'},
//   {type:'tom1' , sound: './sound/tom-h.wav'},
//   {type:'tom2' , sound: './sound/tom-l.wav'}
//  ]);

export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
  //'drumSounds': drumSounds, 
});
