import { NativeModules } from 'react-native';
import Reactotron, { trackGlobalErrors, overlay } from 'reactotron-react-native';

interface Tron {
 log: (...args: any[]) => void;
 clear: () => void;
 customCommand: (arg: any) => void;
 display: (arg: any) => void;
}

declare global {
 interface Console {
  tron: Tron;
 }
}

if (__DEV__) {
 const { scriptURL } = NativeModules.SourceCode;
 const scriptHostname = scriptURL.split('://')[1].split(':')[0];
 Reactotron.configure({ name: 'appName', host: scriptHostname })
   .use(trackGlobalErrors())
   .use(overlay())
   .connect();
 // eslint-disable-next-line no-console
 console.tron = {
   log: Reactotron.logImportant,
   clear: Reactotron.clear,
   customCommand: Reactotron.onCustomCommand,
   display: Reactotron.display
 };
}

export default Reactotron;

