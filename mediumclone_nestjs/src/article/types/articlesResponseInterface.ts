import { ArticleEntity } from "../article.entity";
import { ArticleType } from "./article.type";

export class ArticlesResponseInterface{
    articles: ArticleType[];
    articlesCount: number
}
