// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
// ...

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction ("steak", 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction ("steak", 2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction ("steak", 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction ("steak", 4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction ("steak", 5);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction ("steak", 6);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction ("steak", 7);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const instruction1 = await obtainInstruction ("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction1}</li>`;

    const instruction2 = await obtainInstruction ("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction2}</li>`;

    const instruction3 = await obtainInstruction ("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction3}</li>`;

    const instruction4 = await obtainInstruction ("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction4}</li>`;

    const instruction5 = await obtainInstruction ("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction5}</li>`;

    const instruction6 = await obtainInstruction ("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction6}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");


  } catch (err) {
    console.log ("error", err);
  }
}
makeBroccoli();


// Bonus 2 - Promise all
// ...
const 

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8, p9])
  .then((valuesArr) => {
    console.log("After promise all :", valuesArr)
  })
  .catch((err) => {
    console.log('In catch :', err)
  })