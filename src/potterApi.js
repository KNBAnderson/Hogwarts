export class PotterInfo {
    getHouse() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://www.potterapi.com/v1/sortingHat`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }

    getClassmates(house) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://www.potterapi.com/v1/characters?key=${process.env.API_KEY}&house=${house}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          }
          request.open("GET", url, true);
          request.send();
        });
      }

      getSpells() {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://www.potterapi.com/v1/spells?key=${process.env.API_KEY}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          }
          request.open("GET", url, true);
          request.send();
        });
      }
  }

  let info = new PotterInfo();
  let house = info.getHouse().then;
  console.log(house);
