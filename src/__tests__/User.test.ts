import request from 'supertest'
import { app } from '../app'
import dotenv from 'dotenv'
dotenv.config();


import createConnection from '../database' 

describe("User", () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations()
    })
    it("Should be able to create a new user", async () => {
        const response = await request(app).post('/users').send({
            email: "teste@teste.com",
            name: "teste"
        })

        expect(response.status).toBe(201);
    });

    it("Should not able to create a user whit exists email", async () => {
        const response = await request(app).post('/users').send({
            email: "teste@teste.com",
            name: "teste"
        })

        expect(response.status).toBe(400);
    });
})