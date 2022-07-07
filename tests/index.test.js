const app = require("../app");
const rq = require("supertest");

describe('POST entities/filter', () => {
    test('should respond with a status code', async () => {
        const rs = await rq(app).post('/api/entities/filter').send();
        expect(rs.status).toBeDefined();
    });

    test('should respond with a content-type of application/json', async () => {
        const rs = await rq(app).post('/api/entities/filter').send();
        expect(rs.headers['content-type']).toEqual(
            expect.stringContaining('json')
        );
    });

    test('should respond with a 404 status code when startId is greater', async () => {
        const rs = await rq(app).post('/api/entities/filter').send({ 'startId': 15, 'endId': 10 });
        expect(rs.statusCode).toBe(404);
    });
});