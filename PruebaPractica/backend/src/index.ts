import { error } from "console";
import app  from "./app"
import { connectDB } from "./db";

async function main() {
    try{
        await connectDB();
        app.listen(3000)
        console.log('listening on port 3000')
    } catch {
        console.error('ERROR: ', error);
    }
    
}

main();
