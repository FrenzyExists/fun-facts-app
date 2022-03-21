
let topic = "Pokemon"

const Facts = () => {
    return (
        <div>
            <h1>
                Fun Facts about... {topic}
            </h1>
            <div>

                {/* Remove these */}
                <ul>
                    <li>Ivysaur is the only Generation 1 Pokémon whose name begins with the letter I</li>
                    <li>Meowth is the first Pokémon in the animé to talk</li>
                    <li>Abra has the highest Special Attack of all unevolved Pokémon</li>
                    <li>Gastly and its evolution Haunter are the lightest Pokémon in existence</li>
                    <li>Scyther hates the color red, according to the animé episode Showdown in Dark City</li>
                    <li>Krabby can grow back its pincers in a short amount of time if they are lost during battle.</li>
                </ul>

            </div>
        </div>
    );
}

export default Facts;