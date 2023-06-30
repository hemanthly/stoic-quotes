

  async function getQuote(){
    let response = await fetch("https://type.fit/api/quotes");
    let quotes = await response.json();
    
    return quotes;
  }
  function fetchStoicQuote(){
    document.getElementsByClassName("wrapper")[0].innerHTML = `<div class="loader"></div>`;
    getStoicQuote();
  }
  fetchStoicQuote();
  async function getStoicQuote(){
    let response = await fetch("https://api.themotivate365.com/stoic-quote");
    console.log(response.ok);
    console.log(response.status);

    let quotes = await response.json();
    console.log(quotes);
    document.getElementsByClassName("wrapper")[0].innerHTML = `<div class="card">
    <div class="quote">
      <img src="../images/right.png" alt="quote icon">
      <span class="qtext"></span>
    </div>
    <p class="author">Hemanth</p>
    <button onclick="fetchStoicQuote()">Next Quote</button>
</div>
`;
    document.getElementsByClassName("qtext")[0].innerText = quotes.quote;
    document.getElementsByClassName("author")[0].innerText = "Author: " + quotes.author;
    // return quotes;
  }
  getStoicQuote();
//   const quotes = getQuote();
//   nextQuote();
  
  function nextQuote(){
    quotes.then(value => {
        // console.log(value);
        let len = value.length;
        let randNo = Math.floor(Math.random() * len);
        // let randNo = 96;
    
        const randQuote = value[randNo].text;
        let author = value[randNo].author == null ? "Unknown": value[randNo].author;
        
        document.getElementsByClassName("quote")[0].innerText = randQuote;
        document.getElementsByClassName("author")[0].innerText = "Author: " + author;
        // console.log("New quote : ",randQuote);
        // console.log("New quote Author: ",author);
      })
  }



