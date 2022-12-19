const formValuesSubmit = document.querySelector("#formValuesSubmit");
const eventList = document.querySelector("#listGroup");

const input1 = document.querySelector("#exampleFormControlInput1");
const input2 = document.querySelector("#exampleFormControlInput2");
const input3 = document.querySelector("#exampleFormControlInput3");

let allEvents = [];
let checked = [];

const addEvents = () => {
  if (input2.value !== "" && input2.value !== "" && input2.value !== "") {
    allEvents.push(`
    <li class="list-group-item">
      <div class="row">
        <div class="col-9">
          <h4 class="name mb-1 fs-5">${input2.value}</h4>
          <div class="text">
            <span class="fa-6">${input1.value}</span> |
            <span class="fa-6">${input3.value}</span>
          </div>
        </div>

        <div class="col-3">
          <div class="others">
            <div class="done">
              <i class="fas fa-check"></i>
            </div>

            <div class="option">
              <i class="fas fa-ellipsis-vertical"></i>
            </div>

            <div class="popup-option">
              <div class="eventDone">Mark as Done</div>
              <div class="eventDelete">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </li>
      `);

    eventList.innerHTML = allEvents.join("");
    eventFunction();
  }

  input1.value = "";
  input2.value = "";
  input3.value = "";

  if (allEvents.length === 0) {
    eventList.innerHTML = `<li class="list-group-item">
    <div class="no-data">No Data Yet</div>
  </li>`;
  }
};

formValuesSubmit.addEventListener("click", () => addEvents());

const eventFunction = () => {
  const options = document.querySelectorAll(".option");
  const popupOptions = document.querySelectorAll(".popup-option");
  const done = document.querySelectorAll(".done");
  const eventDone = document.querySelectorAll(".eventDone");
  const eventDelete = document.querySelectorAll(".eventDelete");

  options.forEach((option, idx) => {
    option.addEventListener("click", () => {
      popupOptions[idx].classList.toggle("active");
    });

    popupOptions[idx].addEventListener("click", () => {
      popupOptions[idx].classList.remove("active");
    });

    eventDone[idx].addEventListener("click", () => {
      done[idx].classList.add("active");
    });

    eventDelete[idx].addEventListener("click", () => {
      allEvents.splice(idx, 1);

      addEvents();

      eventList.innerHTML = allEvents.join("");

      hitAgain();
    });
  });
};

const hitAgain = () => {
  setTimeout(() => {
    eventFunction();

    if (allEvents.length === 0) {
      eventList.innerHTML = `<li class="list-group-item">
      <div class="no-data">No Data Yet</div>
    </li>`;
    }
  }, 10);
};
