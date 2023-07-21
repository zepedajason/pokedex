const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    return (
        <div className="pokecard">
            <div>{props.id}</div>
            <div className="poke-name">{props.name}</div>
            <img className="poke-img" src={`${POKE_API}${props.id}.png`} /> 
            <div className="poke-type">Type: {props.type}</div>
            <div className="poke-exp">Exp: {props.exp}</div>
        </div>
    )
}

export default Pokecard;