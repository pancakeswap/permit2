import { ethers, deployments, run } from 'hardhat';
import { utils } from 'ethers';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deployer address:', deployer.address);

  const salt = utils.keccak256(utils.toUtf8Bytes("PancakeSwap Permit2"));
  console.log('salt:', salt);

  const { address, deploy } = await deployments.deterministic("Permit2", {
    from: deployer.address,
    salt: salt,
  });

  console.log('Expected address:', address);

  console.log('Deploying Permit2...');

  const permit2 = await deploy();

  console.log('Permit2 deployed to:', permit2.address);

  console.log('Verify Permit2');

  const verify = await run('verify:verify', {
    address: address,
  });

  console.log(address, verify, 'verify successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
