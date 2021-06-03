import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true, minLength: 5},
    description: { type: String},
    stars: { type: Number, min: 1},
    planets: { type: Number, min: 1},
    moons: { type: Number, min: 1},
    
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
