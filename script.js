const searchButton = document.getElementById("btn");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("search-results");

const fetchData = async (event) => {
  event.preventDefault(); 

  const userQuery = searchInput.value.trim();

 
  if (!userQuery) {
    results.innerHTML = `<p class="error">Please enter a search term.</p>`;
    return;
  }

  //  Show loading state
  results.innerHTML = `<p class="loading">Loading...</p>`;

  try {
    // Fetch data
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Invalid API call");
    }

    const data = await response.json();

    // Filter posts by search query
    const filtered = data.filter(post =>
      post.title.toLowerCase().includes(userQuery.toLowerCase())
    );

    if (filtered.length === 0) {
      results.innerHTML = `<p class="error">No results found.</p>`;
      return;
    }

    //Display results
    results.innerHTML = `
      <ul>
        ${filtered.map(post => `
          <li><strong>User ${post.userId}</strong></li>
          <li>${post.title}</li>
          <li>${post.body}</li>
          <hr>
        `).join("")}
      </ul>
    `;
  } catch (error) {
    results.innerHTML = `<p class="error">Something went wrong. Please try again.</p>`;
    console.error("Error:", error);
  }
};


searchButton.addEventListener("click", fetchData);
