import React from 'react';
import {useGetPlayer} from "../services/PlayerService";


export const PlayerComponent = (props) => {
    console.log(props.player.players);
    const player1 = useGetPlayer();

    return (
        <>
            <h1 onClick={() => props.onPlayerAdd(player1)}>SKERE</h1>
            { player1 && Object.keys(player1).map((key: string) => <div key={key}>{key} : { player1[key] }</div>) }
        </>
    );
};