import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRopository } from '../ropositories/SurveysRopository';
import { SurveysUserRopository } from '../ropositories/SurveyUserRepository';
import { UserRepository } from '../ropositories/UserRepository';


class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UserRepository);
        const surveysRepository = getCustomRepository(SurveysRopository);
        const surveysUsersRepository = getCustomRepository(SurveysUserRopository);

        const userAlreadyExists = await usersRepository.findOne({email});

        if(!userAlreadyExists){
            return response.status(400).json({
                error: "User is not exist"
            });
        }

        const surveyAlreadyExists = await surveysRepository.findOne({id: survey_id});

        if(!surveyAlreadyExists){
            return response.status(400).json({
                error: "Survey is not exist"
            });
        }


        const surveyUser = surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        });

        await surveysUsersRepository.save(surveyUser)

        return response.status(201).json(surveyUser)
    }
}

export { SendMailController }