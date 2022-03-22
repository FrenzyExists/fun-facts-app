import './Fact.css';
import s1 from './s1.svg'
import s2 from './s2.svg'
import s3 from './s3.svg'
import s4 from './s4.svg'
import s5 from './s5.svg'
let topic = "Pokemon" // Testing how variables work here


const Facts = () => {
    return (
        <div className="fact-container">
            <h1 id="topic">
                Fun Facts about... {topic}
            </h1>
            <div>
                <ul className="fact-list">
                    <li><img src={s1} alt="ø"/>Ivysaur is the only Generation 1 Pokémon whose name begins with the letter I</li>
                    <li><img src={s2} alt="ø"/>Meowth is the first Pokémon in the animé to talk</li>
                    <li><img src={s3} alt="ø"/>Abra has highest Special Attack of all unevolved Pokémon</li>
                    <li><img src={s4} alt="ø"/>Gastly and its evolution Haunter are the lightest Pokémon in existence</li>
                    <li><img src={s5} alt="ø"/>Scyther hates the color red, according to the animé episode Showdown in Dark City</li>
                    <li><img src={s1} alt="ø"/>Krabby can grow back its pincers in a short amount of time if they are lost during battle.</li>
                </ul>
            </div>
        </div>
    );
}

export default Facts;