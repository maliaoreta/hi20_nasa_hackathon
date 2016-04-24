'use strict'

const annualSeaLevel = require('./../data/mock/annual_sea_levels.json').set;

const lat = 21.449234144893;
const lon = -158.20037841797;
const xy = [];

for (let i = 0; i < annualSeaLevel.length; i++) {

  for (let k = 0; k < annualSeaLevel[i].data.length; k++) {

    if (annualSeaLevel[i].data[k].lat === lat && annualSeaLevel[i].data[k].lon === lon) {
     
      let xyObj = {
        x: annualSeaLevel[i].year,
        y: annualSeaLevel[i].data[k].seaLevel
      };
      xy.push(xyObj);
    }
  }
}

console.log(xy);