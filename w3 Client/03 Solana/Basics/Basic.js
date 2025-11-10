import { createSolanaRpc ,address  } from '@solana/kit';

async function main() {
    //1)Establish a connection
    const rpc = createSolanaRpc('https://api.devnet.solana.com');
    console.log("Connected to Solana Devnet");

    //2)Get account details
    const publickey = 'DDZh3Z1vgeZMMt1Xut9tdbmdhA4xwAmy595BjptW8B5G';
    const publicKey = address("DDZh3Z1vgeZMMt1Xut9tdbmdhA4xwAmy595BjptW8B5G");
    const response = await rpc.getAccountInfo(publickey).send();

    console.log(
        "Account information:\n",
        JSON.stringify(response, (key, value) =>
            typeof value === "bigint" ? value.toString() : value,2
        )
    );

    //3)Get balanace
    const balance = await rpc.getBalance(publickey).send();
    console.log("Balance:",balance);
    console.log("Balance:",balance.value);

    //4)Get Latest block hash
    const latestblockhash = await rpc.getLatestBlockhash().send();
    console.log("Latest Block Hash :",latestblockhash);

    //5)Airdrop 
    const airdrop = await rpc.requestAirdrop(publicKey,1_000_000_000).send();
    console.log("Airdrop transaction signature:", airdrop);

    const balance2 = await rpc.getBalance(publicKey).send();
    console.log("New balance (lamports):", balance2.value);
}

main().catch(console.err);


//JSON.stringify(value, replacer, space)
//| Parameter  | Description                                                         |
//| value      | The object you want to convert to a JSON string (`response` here).  |
//| replacer   | A function that transforms each value before stringifying.          |
//| space      | Optional: how many spaces to use for pretty-printing (indentation). |
