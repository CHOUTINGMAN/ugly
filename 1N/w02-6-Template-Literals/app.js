const name = 'Tingman';
const age = 18;
const job = 'Web Developer';
const city = 'Tanshui';
let html;

// Without template strings (es5)

html = '<ul>' + 
       '<li> Name: ' + name + '</li>' +
       '<li> Age:' + age +'</li> '+
       '<li> job: ' + job + '</li>' +
       '<li> city:' + city +'</li> '+
       '</ul>';

document.body.innerHTML = html;

// With template strings (es6)
function hello(){
    return 'hello';
}

html = `
       <ul> 
       <li> Name: ${name}  </li> 
       <li> Age:  ${age} </li>
       <li> job:  ${job}  </li> 
       <li> city: ${city} </li> 
       <li> Age:  ${(age>=30 ? 'Over 30' : 'Under 30')} </li>
       <li> ${hello()} </li>
       </ul>
       `;

document.body.innerHTML = html;