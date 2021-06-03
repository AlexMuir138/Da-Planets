import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema(
  {
    name: { type: String, required: true },
    planets: { type: Number},
    moons: { type: Number},
    description: { type: String}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)