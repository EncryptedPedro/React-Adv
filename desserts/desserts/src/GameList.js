function GameList(props) {
    const lowPrices = props.data
    .filter((game) => {
        return game.price > 59;
    })
    .sort((a, b) => {
        return a.price - b.price;
    })
    .map((game) => {
        return (
            <li>
                {game.name} - {game.price} price - Launch date: {game.createdAt}
            </li>
        );
    });
return <ul>{lowPrices}</ul>;
};
  
  export default GameList;
  