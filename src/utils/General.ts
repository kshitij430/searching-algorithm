import _ from "lodash"

class General {
    public static generateNumber(size = 100) {
        const numbers =  _.range(1, 20_000);

       const uniqueRandoms = _.sampleSize(numbers, size);
        return uniqueRandoms.sort((a, b) => a - b);
    }

    public static async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default General