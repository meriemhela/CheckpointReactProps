import playerdata from "../playersData";
import Player from "./Player";

function PlayersList() {
  return (
    <div>
      {playerdata.map((item) => {
        return <Player key={item.id} {...item} />;
      })}
    </div>
  );
}

export default PlayersList;
