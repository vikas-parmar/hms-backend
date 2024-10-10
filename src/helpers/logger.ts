import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import morgan from 'morgan';

const fileRotateTransport = new DailyRotateFile({
    filename: 'logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '30d',
    handleExceptions: true,
    handleRejections: true,
});

export const logger = createLogger({
    level: process.env.LOG_LEVEL || 'http',
    format: format.combine(
        format.errors({ stack: true }),
        format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
        format.json()
    ),
    transports: [
        new transports.Console({
            level: 'info',
            handleExceptions: false,
            handleRejections: false,
        }),
        fileRotateTransport,
    ],
    exitOnError: true,
});

// Http logs with morgon
export const morganMiddleware = morgan(
    (tokens: any, req, res) => {
        return JSON.stringify({
            date: tokens.date(res, res, 'iso'),
            method: tokens.method(req, res),
            url: tokens.url(req, res),
            status: Number.parseFloat(tokens.status(req, res)),
            content_length: tokens.res(req, res, 'content-length'),
            response_time: Number.parseFloat(tokens['response-time'](req, res)),
            remote_address: tokens['remote-addr'](req, res),
            remote_user: tokens['remote-user'](req, res),
            http_version: tokens['http-version'](req, res),
            user_agent: tokens['user-agent'](req, res),
            referrer: tokens.referrer(req, res),
        });
    },
    // ":remote-addr - :remote-user [:date[iso]] :method :url HTTP/:http-version :status :res[content-length] :referrer :user-agent - :response-time ms",
    {
        stream: {
            write: (message) => logger.http(JSON.parse(message)),
        },
    }
);
