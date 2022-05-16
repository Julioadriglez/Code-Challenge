const fs = require("fs");

class Reader{
    static readJsonFile(file){
        const data = fs.readFileSync(file);
        return JSON.parse(data);
    }
} 

module.exports = Reader;