import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1724990699622 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usersv2',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usersv2');
  }
}
