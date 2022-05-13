import joi from 'joi'

export const jerseySchema = joi.object({
    name: joi.string().required(),
    img: joi.string().required(),
    price: joi.number().required().positive(),
    type: joi.string().required().valid('nacional', 'internacional')
})