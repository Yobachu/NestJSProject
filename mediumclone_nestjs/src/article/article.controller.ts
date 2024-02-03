import { User } from "@app/user/decorators/user.decorators";
import { AuthGuard } from "@app/user/guards/auth.gurd";
import { UserEntity } from "@app/user/user.entity";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "./dto/createArticle.dto";
import { UpdateArticleDto } from "./dto/updateArticle.dto";
import { ArticleResponseInterface } from "./types/articleResponse.interface";

@Controller('articles')
export class ArticleController{
    constructor (private readonly articleService: ArticleService){

    }
    @Post()
    @UseGuards(AuthGuard)
    @UsePipes( new ValidationPipe())
    async create(@User() currentUser: UserEntity, @Body('article') createArticleDto: CreateArticleDto): Promise<ArticleResponseInterface>{
        const article =  await this.articleService.createArticle(currentUser, createArticleDto);
        return this.articleService.buildArticleResponse(article)
    }

    @Get(':slug')
    async getSingleArticle(@Param('slug') slug: string): Promise <ArticleResponseInterface>{
        const article = await this.articleService.findBySlug(slug)
        return this.articleService.buildArticleResponse(article)
    }

    @Delete(':slug')
    @UseGuards(AuthGuard)
    async deleteArticle(@User('id') currentUserId: number, @Param('slug') slug: string){
        return await this.articleService.deleteArticle(slug, currentUserId)
    }

    @Put(':slug')
    @UseGuards(AuthGuard)
    @UsePipes( new ValidationPipe())
    async updateArticle(
        @User('id') currentUserId: number, 
        @Param('slug') slug: string, 
        @Body('article') updateArticleDto: UpdateArticleDto): 
        Promise<ArticleResponseInterface>{
        const article = await this.articleService.updateArticle(slug, currentUserId, updateArticleDto)
        return this.articleService.buildArticleResponse(article)
        
    }



}