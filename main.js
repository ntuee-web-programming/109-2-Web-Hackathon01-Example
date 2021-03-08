let input = document.getElementById("comment-input");
let comment_num = document.getElementById("comment-num");
let cancel_button = document.getElementById("cancel-button");
let comment_button = document.getElementById("comment-button");
let comment_button_group = document.getElementById("comment-button-group");
let comment_group = document.getElementById("comment-group");
let dom_string = `  <div class="comment">
                        <img class="comment-img" src="images/user-icon.jpg"/>
                        <div class="comment-right">
                            <div>
                                <span class="comment-name">Toby Chen</span>
                                <span class="comment-time">現在</span>
                            </div>
                            <p class="comment-text">I am Toby Chen. This is a comment.</p>
                        </div>
                    </div>`;
let blue = "#065FD4";

let input_handler = (e) => {
    comment_button.hidden = false;
    cancel_button.hidden = false;
    if (e.target.value.trim() === ''){
        comment_button.setAttribute("style", `background-color: #ccc`);
        comment_button.disabled = true;
    }
    else{
        comment_button.setAttribute("style", `background-color: ${blue}`);
        comment_button.disabled = false;
    }
}

let cancel_handler = (e) => {
    input.value = "";
    comment_button.setAttribute("style", `background-color: #ccc`);
    comment_button.disabled = true;
    comment_button.hidden = true;
    cancel_button.hidden = true;
}

let click_handler = (e) => {
    if (input.value.trim() !== ""){
        let doc = new DOMParser().parseFromString(dom_string, "text/html");
        let new_comment = doc.body.firstChild;
        new_comment.lastElementChild.lastElementChild.innerHTML = input.value.trim();
        comment_group.appendChild(new_comment)
        input.value = "";
        comment_button.setAttribute("style", `background-color: #ccc`)
        comment_num.innerHTML = `${comment_group.children.length}則留言`
    }
}

input.addEventListener("input", input_handler);
input.addEventListener("focus", (e)=>{
    comment_button.hidden = false;
    cancel_button.hidden = false;
})
cancel_button.addEventListener("click", cancel_handler);
comment_button.addEventListener("click", click_handler);