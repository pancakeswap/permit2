import { ethers, deployments, run } from 'hardhat';
import { utils } from 'ethers';

async function main() {
  console.log('Verify Permit2');

  const verify = await run('verify:verify', {
    address: "",
  });

  console.log(verify, 'verify successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
