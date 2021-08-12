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

export const TASKS = {
    NEW_TASK:{
        TODAY:{
            TITLE: "Today's task",
            DUE_DATE: 'Today',
            DESCRIPTION: 'This is a description for a new task'
        },
        TOMORROW:{
            TITLE: "Tomorrow's task",
            DUE_DATE: 'Tomorrow',
            DESCRIPTION: "This is a description for the tomorrow's task"
        }
        
    }
}

export const PROJECTS = {
    NEW_PROJECT:{
        NAME: 'New Project',
        COLOR: 'Mint Green',
        IS_FAVORITE: true
    }
}

export const NUMBER_TASKS = {
    SINGLE: 1,
    MIN: 2,
    MAX: 10
}

export const API_WAIT = 5000
export const TEST_SPEED_ADD_TASK = 0.8