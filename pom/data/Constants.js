import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.BASE_URL,
    LOGEDIN_URL: '/app/today'
}

export const CREDENTIALS = {
    STANDARD_USER:{
        EMAIL: process.env.STANDARD_USER,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },
    INVALID_USER:{
        EMAIL: 'invalid.user@example.com',
        PASSWORD: 'invalid_password'
    }
}

export const MESSAGES = {
    ERROR: {
        LOGIN_PAGE:{
            EMAIL_REQUIRED: 'Invalid email address.',
            NO_PASSWORD: 'Blank password.',
            INVALID_CREDENTIALS: 'Wrong email or password.'
        }
    }
}
