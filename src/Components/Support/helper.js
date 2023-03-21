const helper = {
    formatMoney(value) {
        let val = (value / 1).toFixed(0).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ';
    },
};

export default helper;
