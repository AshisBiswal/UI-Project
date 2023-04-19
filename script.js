let spin;
let trans;
let card;
let heat;
let pie;

// Retrieve data from Firestore collections
const transportDoc = firebase.firestore().collection("Transportation").doc("RjjnmTkp2nDJRgqVc2rA").get();
const cardingDoc = firebase.firestore().collection("Carding").doc("3bhFRpA9luI1HKu42Ove").get();
const heatingDoc = firebase.firestore().collection("Heating").doc("RjwiJJCzarlkH7ANN1vE").get();
const carbonDoc = firebase.firestore().collection("carbon emmision").doc("yHjcxStzPwIJH2w3t3jy").get();
const spinningDoc = firebase.firestore().collection("spinning").doc("mV8YkRldO53Ow8DO5YdF").get();

// Wait for all the Firestore requests to complete
Promise.all([transportDoc, cardingDoc, heatingDoc, carbonDoc, spinningDoc])
  .then((docs) => {
    // Save the retrieved data to variables
    trans = docs[0].data();
    card = docs[1].data();
    heat = docs[2].data();
    pie = docs[3].data();
    spin = docs[4].data();

    // Create the chart for spinning, transportation, carding, and heating
    var ctx = document.getElementById("myChart4").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["jan","feb","Mar","apr","may","june","july"],
        datasets: [{
          label: 'Spinning',
          backgroundColor: "#57CC78",
          data: [spin.jan,spin.feb,spin.mar,spin.apr,spin.may,spin.june,spin.july],
        }, {
          label: 'Transportation',
          backgroundColor: "#55DBDB",
          data: [trans.jan, trans.feb, trans.mar, trans.apr, trans.may,trans.june, trans.july],
        }, {
          label: 'Carding',
          backgroundColor: "#E2FF32",
          data: [card.jan, card.feb, card.mar, card.apr, card.may,card.jun,card.july],
        }, {
          label: 'Heating & Cooling',
          backgroundColor: "#FEC102",
          data: [5000, 5900, 5300, 5607, 5800, 12000, 5960],
        }],
      },
    }
    )
  
    
 
      const data = {
        labels: [
          'Spinning',
          'Transportation',
          'Carding',
          'Heating & Cooling'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [pie.Spinning, pie.Transportation, pie.Carding,pie.cooling],
          backgroundColor: [
            '#57CC78',
            '#55DBDB',
            '#E2FF32',
            '#FEC102'
          ],
          hoverOffset: 4
        }]
      };

      var cty = document.getElementById("myChart5").getContext('2d');
      const con = new Chart(cty, {
        type: 'doughnut',
        data: data,
      });

    });

   
    let maxi;
const eledoc = firebase.firestore().collection("ele").doc("dm9XQhikFXXnhS4e3kde").get();
Promise.all([eledoc])
.then((docs) => {
    p = docs[0].data()
   document.querySelector('.t96').innerHTML = p.third
   document.querySelector('.t97').innerHTML = p.first
   document.querySelector('.t98').innerHTML = p.seco
   document.querySelector('.t99').innerHTML = p.fourth

  }) 
