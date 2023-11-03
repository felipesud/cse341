// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    return data;
  }
}

const getData = async () => {
  const data = await apiFetch("http://localhost:8080/professional");
  console.log("Data:", data.professionalName);
  displayAllData(data);
};

function displayAllData(data) {
  if (data && data.length > 0) {
    const firstElement = data[0];

    displayProfessionalName(firstElement.professionalName);
    displayImage(firstElement.base64Image);
    displayPrimaryDescription(firstElement);
    displayWorkDescription(firstElement);
    displayLinkTitleText(firstElement);
    displayLinkedInLink(firstElement);
    displayGitHubLink(firstElement);
  } else {
    console.log("Data is undefined or empty");
  }
}

function displayProfessionalName(n) {
  let professionalName = document.getElementById("professionalName");
  console.log("n:", n);
  professionalName.innerHTML = n;
}

function displayImage(img) {
  let image = document.getElementById("professionalImage");
  if (img) {
    image.src = `data:image/png;base64, ${img}`;
  } else {
    console.log("Image URL is undefined");
  }
}

function displayPrimaryDescription(data) {
  let nameLink = document.getElementById("nameLink");
  if (data && data.nameLink && data.nameLink.firstName) {
    nameLink.innerHTML = data.nameLink.firstName;
    nameLink.href = data.nameLink.url;
  } else {
    console.log("data.nameLink.firstName is undefined");
  }

  let primaryDescription = document.getElementById("primaryDescription");
  if (data && data.primaryDescription) {
    primaryDescription.innerHTML = data.primaryDescription;
  } else {
    console.log("data.primaryDescription is undefined");
  }
}

function displayWorkDescription(data) {
  let workDescription1 = document.getElementById("workDescription1");
  workDescription1.innerHTML = data.workDescription1;

  let workDescription2 = document.getElementById("workDescription2");
  workDescription2.innerHTML = data.workDescription2;
}

function displayLinkTitleText(data) {
  let linkTitle = document.getElementById("linkTitleText");
  linkTitle.innerHTML = data.linkTitleText;
}

function displayLinkedInLink(data) {
  let linkedInLink = document.getElementById("linkedInLink");

  if (data && data.linkedInLink && data.linkedInLink.text) {
    linkedInLink.innerHTML = data.linkedInLink.text;
    linkedInLink.href = data.linkedInLink.link;
  } else {
    console.log("data.linkedInLink.text is undefined");
  }
}

function displayGitHubLink(data) {
  let githubLink = document.getElementById("githubLink");

  if (data && data.githubLink && data.githubLink.text) {
    githubLink.innerHTML = data.githubLink.text;
    githubLink.href = data.githubLink.link;
  } else {
    console.log("data.githubLink.text is undefined");
  }
}

getData();
