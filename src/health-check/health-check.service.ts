import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  /**
   * Return API status.
   */
  public get() {
    return {
      healthy: true,
      name: 'Parking Lot API',
      version: process.env.npm_package_version,
    };
  }
}
