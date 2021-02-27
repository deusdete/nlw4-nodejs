import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRopository } from "../ropositories/SurveysRopository";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRopository);

    const surveys = surveysRepository.create({ title, description });

    await surveysRepository.save(surveys);

    return response.json(surveys);
  }

  async show (request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRopository);

    const all = surveysRepository.find();

    return response.json(all)
  }
}

export { SurveysController };

