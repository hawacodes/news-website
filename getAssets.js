//fetch api for render data
async function fillCards() {
  const response = await fetch("/assets/json/assets.json");
  const asset = await response.json();

  const { newsWithAd } = asset;

  const cardItem = document.getElementById("card-item-list");

  newsWithAd.forEach((element) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("col");
    wrapper.classList.add("card-wrapper");
    cardItem.appendChild(wrapper);
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card", "card-info");
    wrapper.appendChild(cardInfo);
    const cardNumber = document.createElement("div");
    cardNumber.classList.add("card-number");
    cardNumber.textContent = `${element.id}`.padStart(2, "0");
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
    cardText.classList.add("card-text", "listinfo");
    cardText.textContent = element.content;
    cardBody.appendChild(cardText);
    const cardButton = document.createElement("a");
    cardButton.classList.add("btn", "btn-light");
    cardButton.setAttribute("href", "/pages/newsListInfo.html");
    cardButton.textContent = "DETAY";
    cardBody.appendChild(cardButton);
  });
}

async function fillMainList() {
  const response = await fetch("/assets/json/assets.json");
  const asset = await response.json();

  const { news } = asset;

  const mainList = document.getElementById("main-list-wrapper");

  news.forEach((element) => {
    const listItem = document.createElement("div");
    listItem.classList.add("main-list-item");
    listItem.style.border = "1px solid #00000";
    mainList.appendChild(listItem);
    const listNumber = document.createElement("h5");
    listNumber.classList.add("main-list-number");
    listNumber.textContent = `${element.id}`.padStart(2, "0");
    listItem.appendChild(listNumber);
    const listContent = document.createElement("p");
    listContent.classList.add("main-list-text");
    listContent.textContent = element.title;
    listItem.appendChild(listContent);
  });
}
async function fillverticalList() {
  const response = await fetch("/assets/json/assets.json");
  const asset = await response.json();

  const { news } = asset;

  const mainList = document.getElementById("vcard-list");

  news.forEach((element) => {
    const listItem = document.createElement("div");
    listItem.classList.add("card", "card-con");
    mainList.appendChild(listItem);
    const numberRow = document.createElement("div");
    numberRow.classList.add("row", "mx-0");
    listItem.appendChild(numberRow);
    const numberCol = document.createElement("div");
    numberCol.classList.add("col-12", "card-number");
    numberCol.textContent = `${element.id}`.padStart(2, "0");
    numberRow.appendChild(numberCol);
    const listItemRow = document.createElement("div");
    listItemRow.classList.add("row", "mx-0");
    listItem.appendChild(listItemRow);
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("col-md-5");
    listItemRow.appendChild(cardWrapper);
    const cardImage = document.createElement("img");
    cardImage.classList.add("img-fluid", "rounded-start");
    cardImage.src = element.image;
    cardImage.alt = "Card Image";
    cardWrapper.appendChild(cardImage);
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("col-md-7");
    listItemRow.appendChild(textWrapper);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "py-0");
    textWrapper.appendChild(cardBody);
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
