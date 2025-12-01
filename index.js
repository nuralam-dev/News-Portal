const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();

  const categoryContainer = document.getElementById("category-container");

  data.data.news_category.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<button
          class=" px-6 py-3 bg-white text-black-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          ${item.category_name}
        </button>`;
    categoryContainer.appendChild(div);
  });
};


const loadNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data =await res.json();
    data.data.forEach((item)=>{
        console.log(item)
    })
}




loadCategory();
loadNews();
