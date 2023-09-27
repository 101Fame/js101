import  * as IPFS from 'ipfs-core';
import * as fs from 'node-fs'
async function main() {
    const ipfs = await IPFS.create();
    const cid = 'QmSXkyM9bkKPCWaDSvViS14nvbNekGQTJTTeNv7JitSeWZ';  // Replace with your CID

    const stream = ipfs.cat(cid);
    let data = '';

    for await (const chunk of stream) {
        data += chunk.toString()
    }
    await fs.writeFile('./downloadedFile', data);  // Replace './downloadedFile' with your file path
}

main().catch(console.error)
