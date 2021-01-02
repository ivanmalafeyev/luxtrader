const PLACEHOLDER_OPACITY = 0.5;
const inputs = document.querySelectorAll(".input");
if (inputs) {
  [].forEach.call(inputs, (e) => {
    const dv = e.getAttribute("data-value");
    let isPlaceholder = true;
    e.isPlaceholder = isPlaceholder;
    if (dv) {
      e.style.color = `rgba(39, 39, 39, ${PLACEHOLDER_OPACITY})`;
      e.value = dv;
    }
    e.addEventListener("focus", () => {
      if (isPlaceholder) {
        e.value = "";
        isPlaceholder = false;
        e.isPlaceholder = isPlaceholder;
        e.style.color = `rgba(39, 39, 39, 1)`;
      }
    });
    e.addEventListener("blur", () => {
      if (e.value === "") {
        e.value = dv;
        isPlaceholder = true;
        e.isPlaceholder = isPlaceholder;
        e.style.color = `rgba(39, 39, 39, ${PLACEHOLDER_OPACITY})`;
      }
    });
  });
}
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    if (formValidate(form) === 0) {
      //
    } else {
      e.preventDefault();
    }
  });
}

function formValidate() {
  let error = 0;
  const formReq = document.querySelectorAll(".req");
  [].forEach.call(formReq, (e) => {
    formRemoveError(e);
    if (e.classList.contains("email")) {
      if (emailTest(e)) {
        formAddError(e);
        error++;
      }
    } else if (e.getAttribute("type") === "checkbox" && e.checked === false) {
      formAddError(e);
      error++;
    } else {
      if (e.value === "" || e.isPlaceholder) {
        formAddError(e);
        error++;
      }
    }
  });
  return error;
}

function formAddError(input) {
  input.parentElement.parentElement.classList.add("_err");
  input.classList.add("_err");
  input.value = "Ошибка";
}

function formRemoveError(input) {
  input.parentElement.parentElement.classList.remove("_err");
  input.classList.remove("_err");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
