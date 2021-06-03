import { dbContext } from "../db/DbContext"


class StarsService {
  async getStars(query = {}) {
    return await dbContext.Stars.find(query)
  }
  async createStar(starData) {
    return await dbContext.Stars.create(starData)
  }

  async deleteStar(id) {
    return await dbContext.Stars.findByIdAndDelete(id)
  }

  async updateStar(id, starData) {
    let star = await dbContext.Stars.findByIdAndUpdate(id, starData, {new: true, runValidators: true })
    return star
  }

}
export const starsService = new StarsService()