document.querySelector("#box").addEventListener("keydown", (event) =>{
    if (event.key ==="Enter"){
        const box = document.querySelector("#box");
        addItem(box.value);
    }
});
document.querySelector("#list")>addEventListener("click", () => {
    const box = document.querySelector("#box");
    addItem(box.value);
})

addItem = (box) => {
    const item = document.createElement("div");
    const div  = document.createElement("div"); 
    const thumpsUp = document.createElement("i");
    const minusIcon = document.createElement("i");
    const text = document.createElement("p");

    item.className = "item";
    text.textContent = box;

    thumpsUp.className = "fas fa-thumbs-up";
    thumpsUp.style.color = "lightgray";
    thumpsUp.addEventListener("click" , () => {
        thumpsUp.style.color = "limegreen";

    })
    div.appendChild(thumpsUp);

    minusIcon.className = "fas fa-minus";
    minusIcon.style.color = "darkgray";
    minusIcon.addEventListener("click", () => {
        item.remove();

    })
    div.appendChild(minusIcon);

    item.appendChild(text);
    item.appendChild(div);

    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#box").value = "";

}