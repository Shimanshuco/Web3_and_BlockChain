import '../index.css'
import { MINT_SIZE, TOKEN_2022_PROGRAM_ID, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"
import { useWallet } from '@solana/wallet-adapter-react'
import { SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js'

export function TokenLaunchpad() {

    async function createToken() {
        const wallet = useWallet();
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();
        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId,
            }),
            createInitializeMint2Instruction(keypair.publicKey, decimals, mintAuthority, freezeAuthority, programId),
        );

        await sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);

        return keypair.publicKey;


        transaction.partialSign(keypair);

        await wallet.signTransaction(transaction);

    }


    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-violet-700 mb-8">Solana Token Launchpad</h1>
            <input type="text" placeholder="Name" className="px-4 py-2 mb-3 border border-gray-300 rounded w-64 text-lg focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input type="text" placeholder="Symbol" className="px-4 py-2 mb-3 border border-gray-300 rounded w-64 text-lg focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input type="text" placeholder="Image URL" className="px-4 py-2 mb-3 border border-gray-300 rounded w-64 text-lg focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input type="text" placeholder="Initial Supply" className="px-4 py-2 mb-3 border border-gray-300 rounded w-64 text-lg focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <button onClick={createToken} className="mt-4 px-6 py-2 bg-violet-700 text-white rounded text-lg font-semibold hover:bg-violet-900 transition">Create a token</button>
        </div>
    )
}