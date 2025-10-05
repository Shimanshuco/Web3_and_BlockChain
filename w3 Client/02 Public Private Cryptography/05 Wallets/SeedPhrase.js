import {generateMnemonic, mnemonicToSeedSync} from 'bip39';

const mnemonic = generateMnemonic();
console.log("Mnemonic (Seed Phrase):", mnemonic);

const seed = mnemonicToSeedSync(mnemonic);
console.log("Seed (Hex):", seed.toString('hex'));
console.log("Seed (Base64):", seed.toString('base64'));
console.log("Seed (Binary):", seed);