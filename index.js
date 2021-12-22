class Temperature {
    nhietDo;

    constructor(nhietDo) {
        this.nhietDo = nhietDo;
    }

    getNhietDo() {
        return this.nhietDo;
    }

    getDoF() {
        return this.nhietDo * 1.8 + 32;
    }

    getDoK() {
        return this.nhietDo + 273.15
    }


}