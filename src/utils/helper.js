function comapreTime(time1, time2){
    const time1Date = new Date(time1);
    const time2Date = new Date(time2);
    return time1Date.getTime() > time2Date.getTime();
}

module.exports = {
    comapreTime
}