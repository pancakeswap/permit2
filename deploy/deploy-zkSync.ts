import { parseEther } from "ethers/lib/utils";
import { ethers, network, run } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Wallet, utils } from "zksync-web3";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const networkName = network.name;

  // Initialize the wallet.
  const wallet = new Wallet(process.env.KEY_MAINNET||"");
  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("AdapterFactory");
 
  // Deploy contracts.
  const contract = await deployer.deploy(artifact); 
  console.log(`Deployed to ${contract.address}`);

  const qualifedName = "contracts/AdapterFactory.sol:AdapterFactory";

  // Verify contract programmatically
  const verificationId = await hre.run("verify:verify", {
    address: contract.address,
    contract: qualifedName,
    // constructorArguments: constructorArguments,
    bytecode: artifact.bytecode,
  });
};
