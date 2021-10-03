async function main() {
    const sharkNFT = await ethers.getContractFactory("SharkNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const deployedNFT = await sharkNFT.deploy()
    console.log("Contract deployed to address:", deployedNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })


    // https://ropsten.etherscan.io/address/0x6E5A0Ddad9a743D60bf3372169C495df2789e152#code