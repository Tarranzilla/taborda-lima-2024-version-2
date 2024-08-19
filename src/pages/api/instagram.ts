import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = process.env.TOKEN_INSTAGRAM_JOAOTARRAN;
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    // Log the URL and token for debugging
    console.log("Instagram API URL:", url);
    console.log("Instagram Token:", token);

    try {
        const { data } = await axios.get(url);
        res.status(200).json(data);
    } catch (error) {
        // Enhanced error logging
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data || error.message);
            res.status(500).json({ error: error.response?.data || error.message });
        } else {
            console.error("Unexpected error:", error);
            res.status(500).json({ error: "Unexpected error occurred" });
        }
    }
}
