const dashboard = document.getElementById("dashboard");
const books = document.getElementById("book")
const frequentlyAskedQuestions = document.getElementById("frequently-ask-question")
const media = document.getElementById("media")
const transactions = document.getElementById("transaction")
const users = document.getElementById("user")
const settings = document.getElementById("setting")
const notice = document.getElementById("notice")

let fieldset = ()=>{
    document.getElementById("fieldset").innerHTML = `
    <form>
        <input type="text" width="50px" placeholder="Name" />
    </form>
    `;
}

dashboard.addEventListener('click', fieldset);