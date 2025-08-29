// routes/homeSettings.js
import express from "express";
import upload from "../middleware/upload.js";
//import { ensureSingleSettings } from "../middleware/singletonHomeSettings.js";
import HomeSettings from "../models/HomeSettings.mongodb.js";

const router = express.Router();

// Create/Update with file uploads
router.post(
  "/save",
  upload.fields([
    { name: "brandLogo", maxCount: 1 },
    { name: "heroBanner", maxCount: 1 },
    { name: "sponsorLogos", maxCount: 10 }
  ]),
  async (req, res) => {
    try {
      // Convert values from req.body correctly
      const toBool = (val) => val === "true";

      const rawControls = req.body.controls || {};

      const controls = {
        showPropertySection: toBool(rawControls.showPropertySection),
        propertyCount: parseInt(rawControls.propertyCount || 0, 10),
        enquiryForm: toBool(rawControls.enquiryForm),
        neighbourSection: toBool(rawControls.neighbourSection),
        interestedInSellingSection: toBool(rawControls.interestedInSellingSection),
        meetTeam: toBool(rawControls.meetTeam),
      };

      console.log(req.body);

      const data = {
        brandName: req.body.brandName,
        brandLogo: req.files["brandLogo"]?.[0]?.path || undefined,
        heroBanner: req.files["heroBanner"]?.[0]?.path || undefined,
        sponsorLogos: req.files["sponsorLogos"]?.map(f => f.path) || [],
        controls
      };

      // Ensure only one settings document exists
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
