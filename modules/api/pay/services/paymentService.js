exports.initiatePayment = async (body)=>{
        console.log("<><><><",body);
        const resp =  new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(new Date().getTime());
            }, 3000);
          });

          return resp;
}