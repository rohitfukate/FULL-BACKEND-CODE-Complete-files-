import express from "express";
import axios from "axios";

const router = express.Router();

// Fetch a random quote from third-party API
router.get("/quote", async (req, res) => {
  try {
    const apiURL = process.env.THIRD_PARTY_API_URL;
    const response = await axios.get(apiURL);

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch external data",
      error: error.message,
    });
  }
});

export default router;
