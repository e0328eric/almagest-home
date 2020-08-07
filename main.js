document
    .querySelector("#latex-tutor")
    .addEventListener("click", alertNotImplemented);
document
    .querySelector("#other-blogs")
    .addEventListener("click", alertNotImplemented);

function alertNotImplemented() {
    alert("아직 글이 적혀 있는 것이 없다.");
}
