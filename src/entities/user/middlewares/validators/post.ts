import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error/index";
import joi_user from '../../utils/joi/joi.user';
export default async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) return next(new BadRequest({ message: 'no file found' }));
    let joi_user_validation = joi_user.validate(req.body);
    if (joi_user_validation.error) return next(new BadRequest({ message: joi_user_validation.error.message, details: <Array<object>>joi_user_validation.error.details }));
    return next();
}