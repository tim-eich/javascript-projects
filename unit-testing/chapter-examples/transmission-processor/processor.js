 function processor(transmission) {
    if (transmission.indexOf('::') < 0) {
        return -1;
    }
    let parts = transmission.split('::');
    let rawData = parts[1].trim();
    if (rawData[0] !== '<') {
        rawData = -1;
    }
    return {
        id: Number(parts[0].trim()),
        rawData: rawData
    }
 }

 module.exports = processor;