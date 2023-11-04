const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('https://ipfs.infura.io:5001');

async function addToIPFS(jsonData) {
    const { path } = await ipfs.add(JSON.stringify(jsonData));
    return path;
}