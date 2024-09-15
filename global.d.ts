declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string
        NODE_ENV: string
        APP_NAME: string
        ORG_NAME: string
        ACCESS_TOKEN: string
        ACCESS_KEY: string
        ATLAS_URL: string
        LOCAL_URL: string
        SMTP_SERVICE: string
        SMTP_NAME: string
        SMTP_USER: string
        SMTP_PASSWORD: string
        JWT_SECRET: string
        JWT_EXPIRE_TIME: string
        JWT_ISSUER: string
        SUPER_ADMIN_FIRST_NAME: string
        SUPER_ADMIN_LAST_NAME: string
        SUPER_ADMIN_EMAIL: string
        SUPER_ADMIN_PHONE: string
        SUPER_ADMIN_PASSWORD: string
        ADMIN_ADDRESS: string
        MAIN_ADDRESS: string
        ADMIN_RESET_ADDRESS: string
        MAIN_RESET_ADDRESS: string
    }
}
