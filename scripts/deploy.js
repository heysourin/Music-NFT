const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const Contract = await ethers.getContractFactory("Music");
  const contract = await Contract.deploy(
    "ipfs://QmdF7XobZ4mdSZbXRT2Cw8MuSAhu3EBYpQG3exWcjp7NS5"
  );
  await contract.deployed();
  
  console.log("Contract Address:", contract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
