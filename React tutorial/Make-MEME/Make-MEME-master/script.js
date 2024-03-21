const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-image");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};

const generateMeme = () => {
  fetch("http://alpha-meme-maker.herokuapp.com/")
    .then(response => response.json())
    .then(data => {
      const memes = data.data;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      updateDetails(randomMeme.image, randomMeme.name, randomMeme.tags);
    })
    .catch(error => console.log(error));
};

generateMemeBtn.addEventListener("click", generateMeme);
