//prototipul obiectului
class Macara{
    constructor(options){
      this.model = options._model;
      this.greutateMax = options._greutateMax;
      this.lungimeMax = options._lungimeMax;
      }

      //metode
      ridica(){
        console.log('Ridica container');
      }

    coboara(){
      console.log('Coboara container');
    }
    misca_doc(){
      console.log('Misca bratul spre doc');
    }
    misca_vas(){
      console.log('Misca bratul spre vas');
    }
  }

//obiect
let macara = new Macara({
  _model: '1',
  _greutateMax: '2',
  _lungimeMax: '15m'

});

//afisare in consola a obiectului
console.log(macara);

//greutatile celor 5 containere
let m = [1, 2, 3, 2, 3];

//SCENARIUL 1
//macaraua se misca spre vas
macara.misca_vas();

const greut_max = 2;
//se descarca 5 containere in dependenta de greutatea acestora
const container = function () {
  console.log('----pregatire----');
    for(let i = 0; i < m.length; i++){
      return new Promise((resolve, reject) => {
          if(m[i] < greut_max){
              macara.ridica();
              macara.misca_doc();
              macara.coboara();
              resolve();
          }else{
              reject('Greutatea containerul depaseste greutatea maxima a macara');
          }
        });
    };
};


//SCENARIUL 2
const container = function () {
  console.log('----pregatire----');
    for(let i = 0; i < m.length; i++){
      return new Promise((resolve, reject) => {
          if(m[i] < greut_max){
              macara.ridica();
              macara.misca_vas();
              macara.coboara();
              resolve();
          }else{
            console.log('Containerul urmator');
              reject('Greutatea containerul depaseste greutatea maxima a macara');
          }
        });
    };
};



container()
  .then()
    .catch((error) => console.log(error));
