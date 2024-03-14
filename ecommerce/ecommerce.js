let clicked = () => {
    let file = document.getElementById("imgfile").files[0];
    let r = new FileReader();
    r.readAsDataURL(file)
    r.onload = function () {
        document.getElementById("my-img").src = r.result;
    }

    let stockitem = document.getElementById("stockitem").value
    let qty = document.getElementById("qty").value
    let rate = document.getElementById("rate").value
    let amount = document.getElementById("amount").value ;

    document.getElementById("tablebody").innerHTML +=
        `<tr><td>${stockitem}</td><td><img id="my-img" src = ${r.result} height="150px" width="150px"/></td><td>${qty}</td><td>${rate}</td><td>${amount}</td></tr>`

    document.getElementById("stockitem").value = ""
    document.getElementById("qty").value = ""
    document.getElementById("my-img").value = ""
    document.getElementById("rate").value = ""
    document.getElementById("amount").value = "";
}
document.getElementById("imgbtn").addEventListener("click", clicked)