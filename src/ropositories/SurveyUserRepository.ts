import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";


@EntityRepository(SurveyUser)
class SurveysUserRopository extends Repository<SurveyUser> {

}

export{ SurveysUserRopository }