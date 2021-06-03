import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import { GalaxySchema } from "../models/Galaxy";
import { PlanetSchema } from "../models/Planet";
import { StarSchema } from "../models/Star";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxies = mongoose.model('Galaxies', GalaxySchema)

  Planets = mongoose.model('Planets', PlanetSchema)
  
  Stars = mongoose.model('Stars', StarSchema)

}

export const dbContext = new DbContext()
