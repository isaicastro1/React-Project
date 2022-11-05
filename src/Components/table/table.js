const teamId = {
  "Real Madrid": 86,
  Barcelona: 83,
  "Athletico Madrid": 1068,
  "Real Sociedad": 89,
  "Athletic Club": 93,
  "Real Betis": 244,
  Osasuna: 97,
  Villareal: 102,
  "Rayo Vallecano": 101,
  Valencia: 94,
  "Real Valladolid": 95,
  Mallorca: 84,
  Almeria: 102,
  Espanyol: 88,
  "Celta Vigo": 85,
  Girona: 9812,
  Getafe: 2922,
  Sevilla: 243,
  Cadiz: 3842,
  Elche: 3751,
  Arsenal: 359,
  "Manchester City": 382,
  "Tottenham Hotspur": 367,
  "NewCastle United": 361,
  "Manchester United": 360,
  Chelsea: 363,
  Fulham: 370,
  "Brighton Hove Albion": 331,
  Liverpool: 364,
  "Crystal Palace": 384,
  Brentford: 337,
  Everton: 368,
  "West Ham United": 371,
  "AFC Bournemouth": 349,
  "Leeds United": 357,
  "Aston Villa": 362,
  Southampton: 376,
  "Leicester City": 375,
  "Wolverhampton Wanderers": 380,
  "Nottingham Forest": 393,
};

const Table = ({ array }) => {
  return (
    <table className="standings">
      <thead>
        <tr>
          <th scope="col" className="left" title="team">
            {}
          </th>
          <th scope="col" className="right" title="GP">
            GP
          </th>
          <th scope="col" className="right" title="W">
            W
          </th>
          <th scope="col" className="right" title="D">
            D
          </th>
          <th scope="col" className="right" title="L">
            L
          </th>
          <th scope="col" className="right" title="GD">
            GD
          </th>
          <th scope="col" className="right" title="P">
            P
          </th>
        </tr>
      </thead>
      <tbody>
        {array &&
          array.forEach((item) => {
            <tr className="" key={item.team.id}>
              <td className="team-name">
                <img
                  src={item.team.logo}
                  style={{ height: 20, width: 20 }}
                  alt={item.team.name}
                />
                <a href="">{item.team.name}</a>
              </td>
              <td className="right">{item.all.played}</td>
              <td className="right">{item.all.win}</td>
              <td className="right">{item.all.draw}</td>
              <td className="right">{item.all.lose}</td>
              <td className="right">{item.goalsDiff}</td>
              <td className="right">{item.points}</td>
            </tr>;
          })}
      </tbody>
    </table>
  );

  //   console.log("array", array);
  //   array.forEach((item) => {
  //     console.log({
  //       id: item.team.id,
  //       rank: item.rank,
  //       name: item.team.name,
  //       logo: item.team.logo,
  //       played: item.all.played,
  //       wins: item.all.win,
  //       draws: item.all.draw,
  //       losses: item.all.lose,
  //       goalsDiff: item.goalsDiff,
  //       points: item.points,
  //     });
  //   });

  //   return (
  //     <table className="standings">
  //       <thead>
  //         <tr>
  //           <th scope="col" className="left" title="team">
  //             TEAM
  //           </th>
  //           <th scope="col" className="right" title="GP">
  //             GP
  //           </th>
  //           <th scope="col" className="right" title="W">
  //             W
  //           </th>
  //           <th scope="col" className="right" title="D">
  //             D
  //           </th>
  //           <th scope="col" className="right" title="L">
  //             L
  //           </th>
  //           <th scope="col" className="right" title="GD">
  //             GD
  //           </th>
  //           <th scope="col" className="right" title="P">
  //             P
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {allTeamData.map((item) => {
  //           const {
  //             id,
  //             rank,
  //             name,
  //             logo,
  //             played,
  //             wins,
  //             draws,
  //             losses,
  //             goalsDiff,
  //             points,
  //           } = item;

  //           return (
  //             <tr className="" key={id}>
  //               <td className="team-name">
  //                 <img src={logo} style={{ height: 20, width: 20 }} alt={logo} />
  //                 <a
  //                   href={`https://www.espn.com/soccer/team/_/id/${
  //                     teamId[name]
  //                   }/${
  //                     name.includes(" ")
  //                       ? name.replace(" ", "-").toLowerCase()
  //                       : name.toLowerCase()
  //                   }`}
  //                   name=""
  //                 >
  //                   {name}
  //                 </a>
  //               </td>
  //               <td className="right">{played}</td>
  //               <td className="right">{wins}</td>
  //               <td className="right">{draws}</td>
  //               <td className="right">{losses}</td>
  //               <td className="right">
  //                 {goalsDiff.toString().includes("-")
  //                   ? goalsDiff
  //                   : `+${goalsDiff}`}
  //               </td>
  //               <td className="right">{points}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   );
};

export default Table;