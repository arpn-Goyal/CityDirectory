// models/HomeSettings.js
import mongoose from "mongoose";

const homeSettingsSchema = new mongoose.Schema({
  brandLogo: {
    type: String, // File path or URL
  },
  brandName: {
    type: String,
    required: true,
  },
  heroBanner: {
    type: String, // File path or URL
  },
  sponsorLogos: [
    {
      type: String, // Multiple file paths/URLs
    }
  ],
  controls: {
    showPropertySection: { type: Boolean, default: true },
    propertyCount: { type: Number, default: 0 },
    enquiryForm: { type: Boolean, default: true },
    neighbourSection: { type: Boolean, default: true },
    interestedInSellingSection: { type: Boolean, default: true },
    meetTeam: { type: Boolean, default: true }
  }
}, { timestamps: true });

export default mongoose.model("HomeSettings", homeSettingsSchema);
