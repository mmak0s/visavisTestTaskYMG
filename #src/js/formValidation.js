let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    let cnt = 0;
    e.preventDefault();
    if(name.value === "" || name.value === null){
        name.nextElementSibling.nextElementSibling.style.display = "block";
        cnt++;
    }else{
        name.nextElementSibling.nextElementSibling.style.display = "none";

    }
    if(email.value === "" || email.value === null){
        email.nextElementSibling.nextElementSibling.style.display = "block";
        cnt++;

    }else{
        email.nextElementSibling.nextElementSibling.style.display = "none";

    }
    if(phone.value === "" || phone.value === null){
        phone.nextElementSibling.nextElementSibling.style.display = "block";
        cnt++;

    }else{
        phone.nextElementSibling.nextElementSibling.style.display = "none";

    }
    if(cnt === 0){
        let params = "name=" + name.value + "&" + "email=" + email.value + "&" + "phone=" + phone.value;
        ajaxPost(params, "/form-sending", (data) => {
            console.log(data);
        });
    }
});

function ajaxPost(params, url, callback){
    let cnt = 0;
    let func = callback || function(data){};
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            func(request.responseText);
        }else{
            if(cnt < 1){
                alert("Произошла ошибка при отправке формы!");
                cnt++;
            }
        }
    }
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(params);
}
