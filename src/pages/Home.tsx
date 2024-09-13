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
                    <h1 className="desktop-only">
                        SERVIÇOS AUTOMOTIVOS EM GERAL
                    </h1>
                    <h1></h1>
                    <p> Serviços automotivos com garantia e segurança, trazendo o maior conforto ao cliente na hora da manutenção
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
                        <p>1 ano de garantia em serviços</p>
                    </div>
                    <div className="card3 card">
                        <img className="img-cards" src="https://cdn-icons-png.flaticon.com/512/3773/3773652.png" alt="" />
                        <p>Atendimento De Segunda a Sexta das 8H as 18H</p>
                    </div>
                </div>
            </div>

            <div className="rodape">
                        <p>suporte</p>
                        <h1>ola</h1>
            </div>
        </>
    )
}