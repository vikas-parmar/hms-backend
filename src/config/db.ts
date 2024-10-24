import mongoose from 'mongoose';
import { ATLAS_URL, DB_OPTIONS, LOCAL_URL, URI } from '@/types/database';
import constants from '@/utils/constants';
import { logger } from '@/helpers/logger';

const databaseConnection = async (
    ATLAS_URL: ATLAS_URL,
    LOCAL_URL: LOCAL_URL
) => {
    const DB_OPTIONS: DB_OPTIONS = {
        serverSelectionTimeoutMS: 5000,
    };

    const URI: URI = ATLAS_URL ? ATLAS_URL : LOCAL_URL;
    await mongoose
        .connect(URI, DB_OPTIONS)
        .then(() => {
            logger.info(
                ATLAS_URL
                    ? constants.MESSAGES.clConnect
                    : constants.MESSAGES.dbConnect
            );
        })
        .catch((err: any) => {
            logger.error(new Error(err.message));
        });
};

export default databaseConnection;
