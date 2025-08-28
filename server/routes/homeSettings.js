// routes/homeSettings.js
import express from "express";
import upload from "../middleware/upload.js";
import { ensureSingleSettings } from "../middleware/singletonHomeSettings.js";
import HomeSettings from "../models/HomeSettings.js";

const router = express.Router();

// Create/Update with file uploads
router.post(
  "/",
  upload.fields([
    { name: "brandLogo", maxCount: 1 },
    { name: "heroBanner", maxCount: 1 },
    { name: "sponsorLogos", maxCount: 10 }
  ]),
  async (req, res) => {
    try {
      // Prepare body with uploaded file paths
      const data = {
        ...req.body,
        brandLogo: req.files["brandLogo"]?.[0]?.path || undefined,
        heroBanner: req.files["heroBanner"]?.[0]?.path || undefined,
        sponsorLogos: req.files["sponsorLogos"]?.map(f => f.path) || []
      };

      // Run ensureSingleSettings logic here
      let settings = await HomeSettings.findOne();
      if (!settings) {
        settings = await HomeSettings.create(data);
        return res.status(201).json({ message: "Home settings created", settings });
      } else {
        settings = await HomeSettings.findOneAndUpdate({}, data, { new: true });
        return res.status(200).json({ message: "Home settings updated", settings });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);  

// Get Settings
router.get("/", async (req, res) => {
  try {
    const settings = await HomeSettings.findOne();
    if (!settings) return res.status(404).json({ message: "No settings found" });
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
