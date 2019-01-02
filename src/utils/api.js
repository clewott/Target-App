var axios = require('axios');

var dataFile = '/src/data/item-data.json';

function getData () {
  return axios.get(dataFile)
    .then(function (targetItem) {
      console.log(targetItem.data.CatalogEntryView);
      return targetItem.data.CatalogEntryView;
    })
}

module.exports = {
  getData: getData
};