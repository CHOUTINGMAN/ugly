document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.txt',true);

    xhr.onload = function(){
        console.log(xhr);
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${responseText}</h1>`;
        }
    }

    xhr.onerror = function(){
      console.log("Request error ...");
    }
    xhr.send();
}