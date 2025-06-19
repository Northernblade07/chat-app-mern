import {StreamChat} from 'stream-chat';
import 'dotenv/config';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.log('api key and secret is missing ');
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);

// upsert means to create or update if it already exists
export const upsertStreamUser = async(userData)=>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData
    } catch (error) {
        
    }
}

export const generateStreamToken = async(userId)=>{
    
}