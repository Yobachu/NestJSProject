import { UserEntity } from '@app/user/user.entity'
import {Request} from 'express'

export interface ExpressRequestIntreface extends Request{
    user?: UserEntity
}