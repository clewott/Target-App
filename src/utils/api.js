var axios = require("axios");

var dataFile = "/src/data/item-data.json";

const getData = () => {
  return axios.get(dataFile)
    .then((targetItem) => {
      return targetItem.data.CatalogEntryView;
    })
}

module.exports = {
  getData: getData
};