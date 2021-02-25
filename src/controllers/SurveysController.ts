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
}

export { SurveysController };

