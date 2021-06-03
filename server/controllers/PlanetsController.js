import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.updatePlanet)
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
      const planets = await planetsService.getPlanets(req.query)
      return res.send(planets)
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
      const planet = await planetsService.createPlanet(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const planet = await planetsService.deletePlanet(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async updatePlanet(req, res, next) {
    try {
      const id = req.params.id
      const planet = await planetsService.updatePlanet(id, req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
