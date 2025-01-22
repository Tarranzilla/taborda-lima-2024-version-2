import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = process.env.INSTAGRAM_ACCOUNT_TOKEN_2025;
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username";

    // Check if the token exists before proceeding
    if (!token) {
        console.error("Instagram token is not set in environment variables.");
        return res.status(500).json({ error: "Instagram token is not configured" });
    }

    const url = `https://graph.instagram.com/v22.0/me/media?access_token=${token}&fields=${fields}`;

    try {
        // Make the API request to Instagram
        const { data } = await axios.get(url);
        console.log("Instagram data:", data);
        res.status(200).json(data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Log detailed error information
            console.error("Axios error response data:", error.response?.data);
            res.status(500).json({ error: error.response?.data.error.message || "An error occurred while fetching Instagram data" });
        } else {
            // Log and handle non-Axios errors
            console.error("Unexpected error:", error);
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

/* Old Instagram API
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = process.env.NEW_INSTAGRAM_JOAOTARRAN_TOKEN;
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
*/
