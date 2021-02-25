import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../ropositories/UserRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getCustomRepository(UserRepository);

    const userAlreadyExists =  usersRepository.findOne({
      email
    });

    if(userAlreadyExists){
      return response.status(400).json({error: "User Already Exists!"})
    }

    const user = usersRepository.create({ name, email });

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController };

