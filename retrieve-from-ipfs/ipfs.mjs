import  * as IPFS from 'ipfs-core';
import * as fs from 'node-fs'


async function downloadDirectory(ipfs, ipfsPath){
    const files = await ipfs.ls(ipfsPath);

    for (const file of files) {
        console.log(file.name);
    }
}

async function downloadFile(ipfs,ipfsPath){
    const files = await ipfs.ls(ipfsPath);

    for (const file of files) {
        console.log(file.name);
    }
    const stream = ipfs.cat(cid);
    let data = '';

    for await (const chunk of stream) {
        data += chunk.toString()
    }
    await fs.writeFile('./downloadedFile', data)
}

async function main() {
    const ipfs = await IPFS.create();
    const cid = 'QmSXkyM9bkKPCWaDSvViS14nvbNekGQTJTTeNv7JitSeWZ';  // Replace with your CID

    await downloadDirectory(cid)

}

main().catch(console.error)
