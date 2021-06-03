import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {

  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.updateStar)
      .delete('/:id', this.delete)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const stars = await starsService.getStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const star = await starsService.deleteStar(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
  async updateStar(req, res, next) {
    try {
      const id = req.params.id
      const star = await starsService.updateStar(id, req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
