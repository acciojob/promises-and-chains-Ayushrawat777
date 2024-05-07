//your JS code here. If required.
 function myFunction(e){
      
      e.preventDefault();
      let name= document.getElementById('name').value
      let age= document.getElementById('age').value

  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (age>18) {
          resolve(alert(`Welcome, ${name} .You can vote`));
        } else { 
          reject(alert(`Oh sorry ${name} .You aren't old enough`));
        }
      }, 4000);
    });

    myPromise.then((data) => {
      console.log(data);
    })
  }