document.addEventListener('DOMContentLoaded',function(){
    let searchBtn = document.getElementById("search-btn");
    let searchInput = document.getElementById("search");
    let resultDiv = document.getElementById("result");
   

    searchBtn.addEventListener('click',function(event){
        event.preventDefault();
        let query = searchInput.value.trim();
        let url = "superheroes.php?query=" + encodeURIComponent(query);

        fetch(url)
            .then(function(response){
                return response.text();
            })
            .then(function(data) {
                resultDiv.innerHTML = data;
            })
            .catch(function(error){
                console.log("Error: " + error);
            });
            


    });

});