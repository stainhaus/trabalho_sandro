import Logo from "../assets/logo.svg";
import "../styles/cards.css";
import "../styles/header.css";
import "../styles/utility.css";
import { useState } from "react";
import Button from "../components/button";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/rodape.css";
import "../styles/contact.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import { Contact } from "../components/Contact";



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={320} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>


                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>



                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <h1 className="tittle">
                        SERVIÇOS AUTOMOTIVOS EM GERAL
                    </h1>
                    <p> Serviços automotivos com garantia e segurança
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <div className="content-cards">
                <h1>Serviços</h1>
                <div className="cards">
                    <div className="card1 card">
                        <img className="img-cards" src="https://cdn-icons-png.flaticon.com/512/5902/5902522.png" alt="" />
                        <p>Equipamentos de alta qualidade e tecnologia</p>
                    </div>
                    <div className="card2 card">
                        <img className="img-cards" src="https://cdn-icons-png.flaticon.com/512/1156/1156677.png" alt="" />
                        <p>1 ano de garantia em serviços automotivos</p>
                    </div>
                    <div className="card3 card">
                        <img className="img-cards" src="https://cdn-icons-png.flaticon.com/512/3773/3773652.png" alt="" />
                        <p>Atendimento De Segunda a Sexta das 8H as 18H</p>
                    </div>
                </div>
            </div>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={"Check"} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={"Check"} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={"Check"} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={"Check"} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={"Check"} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={"Check"} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={"Check"} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>

                </section>
            </section>


            <Contact/>

            <div className='footer'>
                <div>
                    <h3>Sobre</h3>
                    <p>Informações da empresa</p>
                    <p>Contato</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h3>Suporte</h3>
                    <p>FAQ</p>
                    <p>Telefone</p>
                    <p>Chat</p>
                </div>
                <div>
                    <h3>Ajuda</h3>
                    <p>Formas de Pagamento</p>
                    <p>Como Trabalhamos</p>
                    <p>Horarios de Atendimentos</p>
                </div>
                <div>
                    <h3>Social</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>
            </div>

        </>
    )
}