const generateBtn = document.getElementById("generateBtn");
const randomImage = document.getElementById("randomImage");

generateBtn.addEventListener("click", () => {
  const randomWidth = Math.floor(Math.random() * 500) + 400; 
  const randomHeight = Math.floor(Math.random() * 300) + 300; 
  randomImage.src =`https://picsum.photos/${randomWidth}/${randomHeight}`;
});