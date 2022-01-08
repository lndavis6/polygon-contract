const hre = require("hardhat");
async function main() {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const URI = "ipfs://QmapPRaRN2i4txiEhW89w1nu14EyDJpKMeJu7ztmm8PdKv"
    const WALLET_ADDRESS = "0xEF3171F2Fd0CB811b50Ea38A4c88783588f91fE8"
    const CONTRACT_ADDRESS = "0x9fE15D81F28DEB71046581D4932738e4e286C8D0"
    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});