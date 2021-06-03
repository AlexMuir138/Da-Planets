import { galaxiesService } from '../services/GalaxiesService'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.updateGalaxy)
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
      const galaxies = await galaxiesService.getGalaxies(req.query)
      return res.send(galaxies)
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
      const galaxy = await galaxiesService.createGalaxy(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const galaxy = await galaxiesService.deleteGalaxy(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async updateGalaxy(req, res, next) {
    try {
      const id = req.params.id
      const galaxy = await galaxiesService.updateGalaxy(id, req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
