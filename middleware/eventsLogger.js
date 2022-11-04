const { format, nextDay } = require('date-fns');
const { v4: uuid } = require('uuid')
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logger = async (req, res, next) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logMessage = `${dateTime}\t${uuid()}\t${req.url}\t${req.method}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'repLogs.txt'), logMessage);
    } catch (err) {
        console.log(err);
    }
    
    next();
};

module.exports = logger;