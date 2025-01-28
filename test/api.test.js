const request = require('supertest');
const app = require('../app'); // Adjust the path to your app

describe('API Endpoints', () => {
	test('GET /api/example', async () => {
		const response = await request(app).get('/api/example');
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('data');
	});

	test('POST /api/example', async () => {
		const response = await request(app).post('/api/example').send({ name: 'Test' });
		expect(response.statusCode).toBe(201);
		expect(response.body).toHaveProperty('message', 'Created');
	});

	test('PUT /api/example/:id', async () => {
		const response = await request(app).put('/api/example/1').send({ name: 'Updated Test' });
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('message', 'Updated');
	});

	test('DELETE /api/example/:id', async () => {
		const response = await request(app).delete('/api/example/1');
		expect(response.statusCode).toBe(204);
	});
});