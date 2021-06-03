import { dbContext } from '../db/DbContext'

class PlanetsService {

async getPlanets(query = {}) {
  return await dbContext.Planets.find(query)
}

async createPlanet(planetData) {
  return await dbContext.Planets.create(planetData)
}

async deletePlanet(id) {
  return await dbContext.Planets.findByIdAndDelete(id)
}

async updatePlanet(id, planetData) {
  let planet = await dbContext.Planets.findByIdAndUpdate(id, planetData, {new: true, runValidators: true })
  return planet
}

}
export const planetsService = new PlanetsService()