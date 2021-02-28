import request from 'supertest'
import { app } from '../app'

import createConnection from '../database' 

describe("Surveys", () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations()
    })
    it("Should be able to create a new surveys", async () => {
        const response = await request(app).post('/surveys').send({
            title: "Queremos ouvir sua opinião!",
	        description: "De 0 a 10, quanto você recomendaria a Rocketseat"
        })

        expect(response.status).toBe(201);
    });

    it("Should be able to get all surveys", async () => {
        await request(app).post('/surveys').send({
            title: "Queremos ouvir sua opinião!",
	        description: "De 0 a 10, quanto você recomendaria a Rocketseat"
        })

        const response = await request(app).get('/surveys')

        expect(response.body.length).toBe(2)
        
    });
})