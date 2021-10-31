import { functionTypeAnnotation } from '@babel/types'
import { Request, Response, NextFunction } from 'express'

export const validRegister = async (req: Request, res: Response, next: NextFunction) => {
    const { name, account, password } = req.body

    const errors = [];

    if (!name) {
        errors.push('Please add your name.')
    } else if (name.length > 20) {
        errors.push('Your name is up to 20 char long.')

    }
    if (!account) {
        errors.push('Please add your email or phone number.')
    } else if (!validatePhone(account) && !validateEmail(account)) {
        errors.push('Email or phone number format is incorrect.')
    }

    if (!password || password.length < 6) {
        errors.push('Password must be at least 6 char.')
    }

    if (errors.length > 0) {
        console.log(errors);
    } else {
        next();
    }
}

export function validatePhone(Phone: string) {
    const re = /^[+]/g
    return re.test(Phone)
}

export function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}