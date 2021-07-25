const searchInput = document.querySelector("#search_content");

searchInput.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        search();
    }
});

function search(){
    const input = searchInput.value;
    
    window.location.href = "https://www.google.com/search?q="+ input +"&oq="+ input + "&aqs=chrome..69i57j0i271l3j69i60l4.4589j0j4&sourceid=chrome&ie=UTF-8"
}