import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(params) {
    try {
        const token = generateStreamToken(req.user.id);
        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server issue" , success : false})
    }
}