import 'dotenv/config';
import fs from 'fs';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

// instacia a conexão com o server Spech da IBM
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: process.env.apiKey || '',
    }),
    serviceUrl: process.env.serviceUrl,
});

export async function getIBMPronunciation(text: string) {
    // converter texto para audio
    const synthesizeParams = {
        text: text,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaVoice',
    }

    const synthesize = await textToSpeech.synthesize(synthesizeParams);

    const buffer = await textToSpeech.repairWavHeaderStream(synthesize.result as any) as any;

    return buffer;
}
