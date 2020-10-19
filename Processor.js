class Processor{
    static Process(data){
        var arquivo = data.split('\r\n');
        var rows = [];

        arquivo.forEach(row => {
            var arr = row.split(',');
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;