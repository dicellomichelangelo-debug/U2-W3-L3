const card= document.getElementById('card')
const libreria= function(){
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error('risposta non corretta dal server', response.status)
        }
    })
    .then((data)=>{
        console.log('Dati', data)
        for(let i=0;i< data.length; i++){
            const title= data[i].title
            const img= data[i].img
            const price= data[i].price
            const category= data[i].category
            card.innerHTML += `
             <div class='col-6 col-md-4 col-lg-3' style='min-height: 700px'>
               <div class="card h-100">
                  <img src="${img}" class="card-img-top" alt="copertina" />
                  <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"> ${category}</p>
                    <p class="card-text"> ${price}$</p>
                    <button class="btn btn-primary mb-2" onclick="aggiungi()">
                      <i class="bi bi-cart-plus"></i> Compra ora
                    </button>
                    <button class="btn btn-danger" onclick="this.closest('.col-6').remove()">
                      <i class="bi bi-basket"></i> Scarta
                    </button>
                  </div>
                </div>
               </div>`
            }
    })
    .catch((error)=>{
        console.log('errore nella compilazione della fetch', error)
    })
}
libreria()

