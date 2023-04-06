const helper = {
    formatMoney(value) {
        let val = (value / 1).toFixed(0).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ';
    },
    formatSearch(str) {
        str = str.toLowerCase().trim().replace(/\s+/g, '');
        str = str.replace(/[áàãảạăắằẵẳặâấầẫẩậ]/g, 'a');
        str = str.replace(/[éèẻẽẹêếềểễệ]/g, 'e');
        str = str.replace(/[iíìỉĩị]/g, 'i');
        str = str.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o');
        str = str.replace(/[úùủũụưứừửữự]/g, 'u');
        str = str.replace(/[ýỳỷỹỵ]/g, 'y');
        str = str.replace(/đ/g, 'd');
        return str;
    },
};

export default helper;
