class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time !== undefined || callback !== undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        // Проверьте, есть ли звонок с таким же временем. Если есть, выведите предупреждение в консоль с помощью console.warn('Уже присутствует звонок на это же время').
        let result = this.alarmCollection.find(item => item.time == time);
        if (result !== undefined) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({
            callback : callback,
            time : time,
            canCall : true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time != time);
    } 

    getCurrentFormattedTime() {
        return new Date().toLocaleString(
            "ru-Ru", {
                hour: '2-digit', 
                minute: '2-digit'
            });
    }

    start() {
        if (this.intervalId !== null)
            return;

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if (item.time == this.getCurrentFormattedTime() && item.canCall == true) {
                    item.canCall = false;
                    item.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    } 
}