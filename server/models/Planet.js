import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  name: {type: String, required: true},
  moons: { type: Number, min: 0},
  description: {type: String}
},
{ timestamps: true, toJSON: { virtuals: true } }
)