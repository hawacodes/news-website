//fetch api for render data
async function fillCards() {
  //   const asset = fetch("/assets/json/assets.json").then((response) =>
  //     response.json()
  //   );

  const response = await fetch("/assets/json/assets.json");
  const asset = await response.json();

  const { news } = asset;

  const cardItem = document.getElementById("card-item-list");

  //
  //  //map array
  news.forEach((element) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("col");
    wrapper.classList.add("mb-2");
    wrapper.classList.add("card-wrapper");
    cardItem.appendChild(wrapper);
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card");
    cardInfo.classList.add("card-info");
    wrapper.appendChild(cardInfo);
    const cardNumber = document.createElement("div");
    cardNumber.classList.add("card-number");
    cardNumber.textContent = element.id;
    cardInfo.appendChild(cardNumber);
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardInfo.appendChild(cardContent);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardContent.appendChild(cardBody);
    const cardSubTitle = document.createElement("h6");
    cardSubTitle.classList.add("card-subtitle");
    cardSubTitle.textContent = element.subtitle;
    cardBody.appendChild(cardSubTitle);
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = element.title;
    cardBody.appendChild(cardTitle);
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = element.image;
    cardImage.alt = "Card Image";
    cardBody.appendChild(cardImage);
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.classList.add("listinfo");
    cardText.textContent = element.content;
    cardBody.appendChild(cardText);
    const cardButton = document.createElement("a");
    cardButton.classList.add("btn");
    cardButton.classList.add("btn-light");
    cardButton.textContent = "DETAY";
    cardBody.appendChild(cardButton);

    console.log(cardItem);
  });
}

async function fillMainList() {
  //   const asset = fetch("/assets/json/assets.json").then((response) =>
  //     response.json()
  //   );

  const response = await fetch("/assets/json/assets.json");
  const asset = await response.json();

  const { news } = asset;

  const mainList = document.getElementById("main-list-wrapper");

  //
  //  //map array

  // <div class="main-list-item">
  //   <h5 class="main-list-number">01</h5>
  //   <p class="main-list-text">
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //   </p>
  // </div>;
  news.forEach((element) => {
    const listItem = document.createElement("div");
    listItem.classList.add("main-list-item");
    listItem.style.border = "1px solid #00000";
    mainList.appendChild(listItem);
    const listNumber = document.createElement("h5");
    listNumber.classList.add("main-list-number");
    listNumber.textContent = element.id;
    listItem.appendChild(listNumber);
    const listContent = document.createElement("p");
    listContent.classList.add("main-list-text");
    listContent.textContent = element.title;
    listItem.appendChild(listContent);
  });
}
async function fillverticalList() {
  //   const asset = fetch("/assets/json/assets.json").then((response) =>
  //     response.json()
  //   );

  const response = await fetch("/assets/json/assets.json");
  const asset = await response.json();

  const { news } = asset;

  const mainList = document.getElementById("vcard-list");

  {
    /* <div class="card card-con">
                <div class="row g-0">
                    <div class="card-number">08</div>
                
                  <div class="col-md-4">
                    <img src="/assets/images/18.png" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
               
                </div>
              </div> */
  }
  news.forEach((element) => {
    const listItem = document.createElement("div");
    listItem.classList.add("card");
    listItem.classList.add("card-con");
    mainList.appendChild(listItem);
    const listItemRow = document.createElement("div");
    listItemRow.classList.add("row");
    listItemRow.classList.add("g-0");
    listItem.appendChild(listItemRow);
    const listCardNumber = document.createElement("div");
    listCardNumber.classList.add("card-number");
    listCardNumber.textContent = element.id;
    listItemRow.appendChild(listCardNumber);
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("col-md-4");
    listItemRow.appendChild(cardWrapper);
    const cardImage = document.createElement("img");
    cardImage.classList.add("img-fluid");
    cardImage.classList.add("rounded-start");
    cardImage.src = element.image;
    cardImage.alt = "Card Image";
    cardWrapper.appendChild(cardImage);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardWrapper.appendChild(cardBody);
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = element.title;
    cardBody.appendChild(cardTitle);
    const cardSubtitle = document.createElement("p");
    cardSubtitle.classList.add("card-text");
    cardBody.appendChild(cardSubtitle);
    const cardTextMuted = document.createElement("small");
    cardTextMuted.classList.add("text-muted");
    cardTextMuted.textContent = element.subtitle;
    cardSubtitle.appendChild(cardTextMuted);
  });
}
