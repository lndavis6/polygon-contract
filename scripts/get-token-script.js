const hre = require("hardhat");
async function main() {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const CONTRACT_ADDRESS = "0xA6CC83c83b57Aab61E50293be91ce7aD64406003";
    const contract = NFT.attach(CONTRACT_ADDRESS);
    const owner = await contract.ownerOf(1);
    console.log("i'm here");
    console.log("Owner:", owner);
    const uri = await contract.tokenURI(1);
    console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});