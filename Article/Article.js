// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = expandButton; 
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    element.addEventListener("click", this.expandArticle); 
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    event.currentTarget.classList.toggle("article");
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");
let expandButton = document.querySelectorAll(".expandButton").innerHTML = "Expand";
let open = document.querySelectorAll(".article-open");


// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(function(article){
  new Article(article); 
}); 


