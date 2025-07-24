// so much empty
window.addEventListener("load", function () {
  const postForm = document.getElementById("postForm");
  const postList = document.getElementById("postList");
  const error = document.getElementById("error");
  const fetchButton = document.getElementById("fetchButton");
  const titleInput = document.getElementById("titleInput");
  const bodyInput = document.getElementById("bodyInput");

  function showMessage() {
      const loading = document.getElementById('loading');
      loading.style.display = "block";
  }

  function hideMessage() {
      const loading = document.getElementById('loading');
      loading.style.display = "none";
  }

  const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      showMessage();
      if (!response.ok){
            throw new Error(`Error status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      hideMessage();
    })
    .catch(error => {
      console.error("Error fetching the data: ", error);
    } 
    );

    function renderPosts(posts) {
      posts.forEach(post => {
            postList.appendChild(${post["title"]})
            
      });
    }
      

//   fetchButton.addEventListener("click", () => {

//       fetchedPosts.forEach((post) => {postList.appendChild('${fetchedPosts['title']');
//       });
//       });

  
});
