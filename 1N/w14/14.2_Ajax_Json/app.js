document.getElementById('button1').addEventListener('click',loadCustomer);

document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true);

    xhr.onload = function(){
        console.log(xhr);
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            console.log(customer);
            const output = `
            <ul>
             <li>ID:${customer.id}</li>
             <li>Name:${customer.name}</li>
             <li>Company:${customer.company}</li>
             <li>Phone:${customer.phone}</li>
            </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }else{
            console.log("Request error ...");
        }
    }

    xhr.onerror = function(){
      console.log("Request error ...");
    }
    xhr.send();
}

function loadCustomers(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customers.json',true);

    xhr.onload = function(){
        console.log(xhr);
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            console.log(customers);
            let output = '';
            customers.forEach(function(customer){
                output +=`
                <ul>
             <li>ID:${customer.id}</li>
             <li>Name:${customer.name}</li>
             <li>Company:${customer.company}</li>
             <li>Phone:${customer.phone}</li>
            </ul>
                `;
            });
            
           
            document.getElementById('customers').innerHTML = output;
        }else{
            console.log("Request error ...");
        }
    }

    xhr.onerror = function(){
      console.log("Request error ...");
    }
    xhr.send();
}