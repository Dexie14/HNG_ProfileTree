import "./App.css";
import profile__img from "./Images/profile__img.svg";
import Avatar from "./Images/_Avatar share button.svg";
import Slack from "./Images/slack.svg";
import Social_icon from "./Images/Social icon.svg";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={profile__img} alt="avatar" id="profile__img" />
          <h3>Adelu Adeoniye</h3>
          <h1 id="slack">Adeoniye</h1>
        </div>
        <figure>
          <img src={Avatar} alt="share" id="share" />
        </figure>
      </header>
      <main className="Links">
        <a href="https://twitter.com/adeluadeoniye14" id="twitter" target="_blank" rel="noreferrer">Twitter Link</a>
        <a href="https://training.zuri.team/" id="btn__zuri" target="_blank" rel="noreferrer">Zuri Team</a>
        <a href="http://books.zuri.team" id="books" target="_blank" rel="noreferrer" title="This is where you find books about design and coding">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<Adeoniye>" id="book__python" target="_blank" rel="noreferrer">Python Books</a>
        <a href="https://background.zuri.team" id="pitch" target="_blank" rel="noreferrer">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank" rel="noreferrer">Design Books</a>
        <div className="social"> 
          <img src={Slack} alt="slack"/>
          <img src={Social_icon} alt="Social_icon"/>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
