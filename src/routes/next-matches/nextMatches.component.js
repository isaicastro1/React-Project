import { useEffect, useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";
import MatchPreview from "../../Components/match-preview/match-preview.component";
import { options } from "../../utils/options";
import { getDate } from "../../utils/date";

import "./nextMatches.styles.scss";

const NextMatches = () => {
  const { nextMatches, setNextMatches } = useContext(TeamDataContext);

  useEffect(() => {
    const getNextMatches = async () => {
      const response = await fetch(
        `https://v3.football.api-sports.io/fixtures?season=2022&league=2&from=${getDate()}&to=2023-06-30`,
        options
      );
      const data = await response.json();
      setNextMatches(data.response);
      console.log("data", data);
    };
    getNextMatches();
  }, [setNextMatches]);

  console.log("next matches", nextMatches);

  return (
    <div className="matches-container">
      {nextMatches &&
        nextMatches.map((match) => {
          return (
            <MatchPreview
              key={match.fixture.id}
              teamOneName={match.teams.home.name}
              teamOneLogo={match.teams.home.logo}
              teamTwoName={match.teams.away.name}
              teamTwoLogo={match.teams.away.logo}
              round={match.league.round}
              date={match.fixture.date}
              time={match.fixture.date}
            />
          );
        })}
    </div>
  );
};

export default NextMatches;
