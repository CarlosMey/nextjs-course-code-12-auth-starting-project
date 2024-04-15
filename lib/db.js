import { MongoClient } from 'mongodb';

export async function connectToDatabase(){
    // const client = await MongoClient.connect('mongodb+srv://<sistemasgeotop >:<miWns2EBJGafnTID>@cluster0.eyyzsdk.mongodb.net/?retryWrites=true&w=majority&sistemasgeotop=Cluster0');
    try{
        const client = await MongoClient.connect('mongodb+srv://sistemasgeotop:miWns2EBJGafnTID@sistemasgeotop.ywshsdy.mongodb.net/?retryWrites=true&w=majority&appName=sistemasgeotop');
        // mongodb+srv://sistemasgeotop:<password>@sistemasgeotop.ywshsdy.mongodb.net/


    console.log(client);
    return client;
    }catch(error){
        console.log(error);
    }
    
}