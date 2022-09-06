import { Test, TestingModuleBuilder } from '@nestjs/testing';
import * as supertest from 'supertest';
import { INestApplication } from '@nestjs/common';

export class ApiClientFactory {
  private providerMockers: any[] = [];
  public app: INestApplication;
  public mockProvider<T = any>(typeOrToken: T, value: any) {
    this.providerMockers.push([typeOrToken, value]);
    return this;
  }

  private createModuleFixtureBuilder() {
    return Test.createTestingModule({
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      imports: [require('../../src/app.module').AppModule],
      // imports: [AppModule],
    });
  }

  private applyMockProviders(builder: TestingModuleBuilder) {
    this.providerMockers.forEach(([typeOrToken, value]) => {
      builder.overrideProvider(typeOrToken).useValue(value);
    });
    return builder;
  }

  public async create(): Promise<supertest.SuperTest<supertest.Test>> {
    const moduleFixtureBuilder = this.createModuleFixtureBuilder();

    this.applyMockProviders(moduleFixtureBuilder);
    const moduleFixture = await moduleFixtureBuilder.compile();
    const app = moduleFixture.createNestApplication();
    await app.init();
    this.app = app;

    const apiClient = supertest(app.getHttpServer());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    apiClient.destroy = async () => {
      await moduleFixture.close();
    };
    return apiClient;
  }
}
