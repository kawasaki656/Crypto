import { REFRESH_CYCLE, REFRESH_INTERVAL } from "./global";

export const getXAxisLabels = () => {
    const date = new Date();
    const result = [];

    for (let i = 0; i < REFRESH_CYCLE; i++) {
        result.push(`${date.getHours()}:${date.getMinutes() < 10 ? '0':''}${date.getMinutes()}`);
        date.setSeconds(date.getSeconds() + REFRESH_INTERVAL);
    }

    return result;
};