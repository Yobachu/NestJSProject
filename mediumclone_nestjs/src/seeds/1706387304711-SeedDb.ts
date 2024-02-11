import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedDb1706387304711 implements MigrationInterface {
    name = 'SeedDb1706387304711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
        );
            // password is 123
        await queryRunner.query(
            `INSERT INTO users (username, email, password ) VALUES ('foo', 'foo@gmail.com', '$2b$10$2uBslmV6yn4D0JYhDO44a.T2yTDaFTO5drawKKoOfWKAXud4eXmDq')`,
        );

        await queryRunner.query(
            `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES 
            ('first-article', 'First article', 'first article description', 'first article body', 'coffee, dragons', 1)`,
        );

        await queryRunner.query(
            `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES 
            ('second-article', 'second article', 'second article description', 'second article body', 'coffee, dragons', 1)`,
        );
    }

    

    public async down(): Promise<void> {
        
    }

}
