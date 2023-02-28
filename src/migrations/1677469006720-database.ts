import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class database1677469006720 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicle',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'plate',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['car', 'moto'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'park',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'document',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'car_qty',
            type: 'int',
          },
          {
            name: 'moto_qty',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'park',
      new TableIndex({
        name: 'IDX_PARK_ID',
        columnNames: ['id'],
      }),
    );

    await queryRunner.createIndex(
      'vehicle',
      new TableIndex({
        name: 'IDX_VEHICLE_ID',
        columnNames: ['id'],
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('park', 'IDX_PARK_ID');
    await queryRunner.dropIndex('vehicle', 'IDX_VEHICLE_ID');
    await queryRunner.dropTable('park');
    await queryRunner.dropTable('vehicle');
  }
}
