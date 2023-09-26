import { createHelia } from 'helia';
import { dagJson } from '@helia/dag-json'

const cid = "QmSXkyM9bkKPCWaDSvViS14nvbNekGQTJTTeNv7JitSeWZ"
async function main(){

    const helia = await createHelia();
    const d = dagJson(helia)

    const object1 = { hello: 'world' }
    const myImmutableAddress1 = await d.add(object1)

    const object2 = { link: myImmutableAddress1 }
    const myImmutableAddress2 = await d.add(object2)

    const retrievedObject = await d.get(myImmutableAddress2)
    console.log(retrievedObject)
// { link: CID(baguqeerasor...) }

    // console.log(await d.get(retrievedObject))
}




main().
then(()=>{
    console.log("executed successfully")
}).catch((err)=>{
    console.error({err})
})
