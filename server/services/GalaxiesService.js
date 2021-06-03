import { dbContext } from '../db/DbContext'

class GalaxiesService {
  async getGalaxies(query = {}) {
    return await dbContext.Galaxies.find(query)
  }
  async createGalaxy(galaxyData) {
    return await dbContext.Galaxies.create(galaxyData)
  }

  async deleteGalaxy(id) {
    return await dbContext.Galaxies.findByIdAndDelete(id)
  }

  async updateGalaxy(id, galaxyData) {
    let galaxy = await dbContext.Galaxies.findByIdAndUpdate(id, galaxyData, {new: true, runValidators: true })
    return galaxy
  }

}
export const galaxiesService = new GalaxiesService()