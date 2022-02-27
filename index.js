const schedule = require('node-schedule');

//*  At a particular Date & Time
const someDate = new Date('2022-02-27T15:59:00.000+5:00');
schedule.scheduleJob(someDate, () => {
    console.log('Job ran @', new Date().toString());
});

//*  At recurrent intervals
schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('I ran..');
});

/*
*Cron Expression Detail
*   *   *   *   *   *

T   T   T   T   T   T
|   |   |   |   |   |
|   |   |   |   |   |_   day of week (0-7) (0 or & is Sun)
|   |   |   |   |______   month (1-12)
|   |   |   |___________   day of month (1-31)
|   |   |________________   hour (0-23)
|   |_____________________   minute (0-59)
|__________________________   second (0-59, OPTIONAL)

for more details visit examples at https://crontab.guru/
*/

//*  Cancelling jobs (Two Ways)

//*  1. Using job name
schedule.scheduleJob('periodic-job', '*/2 * * * * *', () => {
    console.log('I ran..');
    schedule.cancelJob('periodic-job');
});

//*  2. Using job variable
const periodicJob = schedule.scheduleJob('periodic-job', '*/2 * * * * *', () => {
    console.log('I ran..');
    periodicJob.cancel();
});