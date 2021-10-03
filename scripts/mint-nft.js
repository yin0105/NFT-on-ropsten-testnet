require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contractAddress = process.env.CONTRACT_ADDRESS;

const contractABI = require("../artifacts/contracts/sharkNFT.sol/SharkNFT.json")


const sharkNft = new web3.eth.Contract(contractABI['abi'], contractAddress)

async function mintShark(tokenURI){
    const nonce = await web3.eth.getTransactionCount(process.env.MY_ACCOUNT, "latest");
    const tx = {
        from: process.env.MY_ACCOUNT,
        to: contractAddress,
        gas: 500000,
        nonce: nonce,
        data: sharkNft.methods.mintShark(process.env.MY_ACCOUNT, tokenURI).encodeABI()
    }

    const signPromise = web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY)

    signPromise
        .then((signedTx) =>{
            web3.eth.sendSignedTransaction(signedTx.rawTransaction, 
                (err, txHash) => {
                    if(!err){
                        console.log("Shark Minted Successfully!", txHash);
                    }else{
                        console.log("Failed to Mint Shark!", err);
                    }
                }
            )

        })
        .catch((err)=>{
            console.log("promise failed", err);
        });
}   



mintShark("https://gateway.pinata.cloud/ipfs/QmbR6abayuNGnuobGXnmteLPE4y6wrpqCT19VdKkFAo6F1");

// https://ropsten.etherscan.io/tx/0x207d93d968fb47431692e6e9e584ff71bd1dd012878cd107e94855c5d72bcb42