import "./Help.css"
import { useContext } from "react";
import { LangContext } from "../sharedData";

const Help = () => {
    const lang = useContext(LangContext);

    const dict = {
        faq: ["FAQ", "Perguntas Mais Frequentes"],
        q: ["Q: ", "P: "],
        a: ["A: ", "R: "],
        q1: ["What are groups?", "O que são grupos?"],
        a1: ["Groups are ways to organize your own music, or easily make music with others!", "Os grupos são maneiras de organizar suas próprias músicas ou fazer música facilmente com outras pessoas!"],
        q2: ["What is 'as' in messaging?", "O que é 'como' nas mensagens?"],
        a2: ["'As' is the group that you are disguising yourself as when messaging others.", "'Como' é o grupo que você está se disfarçando ao enviar mensagens para outros."],
        q3: ["I want to edit my song. How do I do it?", "Eu quero editar minha música. Como eu faço isso?"],
        a3: ["Using whatever music-creation program you want, export a MIDI and MP3 from it and upload them!", "Usando qualquer programa de criação de música que você quiser, exporte um MIDI e MP3 dele e faça o upload!"],
        q4: ["I want to make a new group. Do I need to register a new account?", "Eu quero fazer um novo grupo. Preciso registrar uma nova conta?"],
        a4: ["Absolutely not! Simply go into your group selection on the homepage, and press the + button!", "Claro que não! Basta entrar na sua seleção de grupo na página inicial e pressionar o botão com +!"],
        q5: ["I want to message someone new. How do I find them?", "Quero enviar uma mensagem a alguém novo. Como posso fazer isso?"],
        a5: ["Simple. Search for their name in the Group Search bar, and press the chat bubble icon!", "Simples. Procure o nome deles na barra de pesquisa de grupo e pressione o ícone de balão de bate-papo!"],
    };

    return (
        <div className="help">
            <h1>{dict.faq[lang]}</h1>
            <div id="faq">
                <b>{dict.q[lang]}</b>{dict.q1[lang]}<br />
                <b>{dict.a[lang]}</b>{dict.a1[lang]}<br /><br />
                <b>{dict.q[lang]}</b>{dict.q2[lang]}<br />
                <b>{dict.a[lang]}</b>{dict.a2[lang]}<br /><br />
                <b>{dict.q[lang]}</b>{dict.q3[lang]}<br />
                <b>{dict.a[lang]}</b>{dict.a3[lang]}<br /><br />
                <b>{dict.q[lang]}</b>{dict.q4[lang]}<br />
                <b>{dict.a[lang]}</b>{dict.a4[lang]}<br /><br />
                <b>{dict.q[lang]}</b>{dict.q5[lang]}<br />
                <b>{dict.a[lang]}</b>{dict.a5[lang]}<br /><br />
            </div>
        </div>
    );
}

export default Help;