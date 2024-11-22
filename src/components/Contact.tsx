import React, { useState } from "react";
import "../styles/contact.css";

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [observacao, setObservacao] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    // Tipando o parâmetro 'e' como React.FormEvent<HTMLFormElement>
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verificar se os campos não estão vazios
        if (!email || !observacao) {
            setStatusMessage("Por favor, preencha todos os campos.");
            return;
        }

        // Criando os dados para enviar via POST
        const data = {
            toMail: email,
            content: observacao,
        };

        try {
            // Enviando os dados para o servidor usando fetch
            const response = await fetch('https://us-central1-nimble-petal-440422-m6.cloudfunctions.net/function-2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Se o envio for bem-sucedido
                setStatusMessage("Mensagem enviada com sucesso!");
                setEmail("");
                setObservacao("");
            } else {
                // Caso o servidor retorne um erro
                setStatusMessage("Ocorreu um erro ao enviar sua mensagem.");
            }
        } catch (error) {
            // Se o fetch falhar
            console.error("Erro ao enviar o e-mail:", error);
            setStatusMessage("Erro de conexão. Tente novamente.");
        }
    };

    return (
        <div className="contact">
            <p>Precisando de Ajuda?</p>
            <h2>Entre em Contato</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="input2"
                    type="text"
                    name="observacao"
                    placeholder="Digite suas Dúvidas"
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                />
                <button className="enviar" type="submit">ENVIAR</button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};
