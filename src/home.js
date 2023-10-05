import livroimg from "./components/images/livro.png";
import logoimg from "./components/images/logo.png";
import "./App.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="Group38">
        <div className="ReadingLibraryInnovation">
          Reading. Library. Innovation.
        </div>
        <div className="BooknookGaranteAFacilidadeNaProcuraEReservaDeLivrosNaBibliotecaMaisPrXimaDeVoc">
          BookNook garante a facilidade na procura e reserva de livros, na
          biblioteca mais próxima de você.
        </div>
      </div>
      <div className="Group45">
        <Link to="/cadastro">
          <button>
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">Sign Up</span>
          </button>
        </Link>
      </div>
      <div className="LogIn">Log In</div>
      <div className="Image43"></div>
      <img className="Image46" src={livroimg} alt="Imagem" />
      <div className="Group46">
        <div className="Booknook">
          <span>Book</span>
          <span>Nook</span>
        </div>
        <div className="Group">
          <img className="logo" src={logoimg}></img>
        </div>
      </div>
      <div className="ExploreSobreOsLivrosMaisLidosNoMomento">
        Explore sobre os livros mais lidos no momento
      </div>
      <div className="PorQueEscolherBooknook">
        <span>Por que escolher Book</span>
        <span>Nook?</span>
      </div>
      <div className="Ellipse3"></div>
      <div className="Ellipse4"></div>
      <div className="Ellipse5"></div>
      <div className="Ellipse6"></div>
      <div className="Ellipse7"></div>
      <div className="Ellipse8"></div>
      <div className="T30Mil">+ 30 mil</div>
      <div className="TTulos">títulos</div>
      <div className="T3000000">+ 3.000.000</div>
      <div className="UsuRios">usuários</div>
      <div className="T30">+ 30</div>
      <div className="T800">+ 800</div>
      <div className="Editoras">editoras</div>
      <div className="Bibliotecas">bibliotecas</div>
      <div className="Parceiras">parceiras</div>
    </div>
  );
}

export default Home;
