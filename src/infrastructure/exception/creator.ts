import { BadRequestException, UnauthorizedException } from '@nestjs/common';

export class BadRequestExceptionCreator {
  public static Of(statusCode: number, message: string) {
    return new BadRequestException({
      statusCode,
      message,
    });
  }
}

export class UnauthorizedExceptionCreator {
  public static Of(statusCode: number, message: string) {
    return new UnauthorizedException({
      statusCode,
      message,
    });
  }
}
