//get data and convert it to proper data for chart 

const convertData = (data , type) =>{
    const convertedData = data[type].map((item) => {
        return {
            data : item[0],
            [type] : item[1]
        }
    })

    return convertedData;
}

export {convertData};