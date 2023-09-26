import { createHelia } from 'helia';
import { dagJson } from '@helia/dag-json'
import { buffers } from '@helia/buffers';

const cid = "QmSXkyM9bkKPCWaDSvViS14nvbNekGQTJTTeNv7JitSeWZ"
async function main(){

    const helia = await createHelia();
    const d = dagJson(helia)

    const b = buffers(helia);


    const filePath = './downloadedFile';

    // Download the file
    const data = await b.get(cid);

    // Write the downloaded data to a file
    await fs.writeFile(filePath, data);

    console.log('File downloaded successfully');
}
}




main().
then(()=>{
    console.log("executed successfully")
}).catch((err)=>{
    console.error({err})
})
