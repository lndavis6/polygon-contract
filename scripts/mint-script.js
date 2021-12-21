const hre = require("hardhat");
async function main() {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const URI = "ipfs://QmapPRaRN2i4txiEhW89w1nu14EyDJpKMeJu7ztmm8PdKv"
    const WALLET_ADDRESS = "0xa25347e4fd683dA05C849760b753a4014265254e"
    const CONTRACT_ADDRESS = "0xA6CC83c83b57Aab61E50293be91ce7aD64406003"
    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});