import { ApiClientFactory } from './base/api-client';
import * as supertest from 'supertest';

describe('Application init', () => {
  let apiClient: supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    const factory = new ApiClientFactory();
    apiClient = await factory.create();
  });

  afterEach(async () => {
    await (apiClient as any).destroy();
  });

  it('should get Hello World response when call default api', async () => {
    const response = await apiClient
      .get('')
      .send()
      .expect(200)
      .expect('Hello World!');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World!');
  });
});
