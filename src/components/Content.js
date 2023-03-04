import React from 'react'
import "../styles/Content.css"
import StreamCard from './StreamCard';
import Babla from './AvailableStreams.json';
import RedButtonShare from './RedButtonShare';
import Balu from "./DataInfo.json"

// import Scheduled from '../sites/Scheduled';
// https://www.whatsapp.com/download
// kontekst api, redux (ale raczej nie tylko jakas libka ktora ulatwia korzystanie z reduxa), state managmenet
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(dateString) {
  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const day = date.getDate();
  return `${months[monthIndex]} ${day}`;
}

function Card(props) {
  
    const categories = [
      "Musicians", 
      "Influencers", 
      "IT Creators", 
      "Scientists", 
      "Entrepreneurs", 
      "Actors", 
      "Athletes", 
      "Comedians", 
      "Gamers", 
      "Models", 
      "Artists", 
      "Authors", 
      "Activists", 
      "LGBTQ+", 
      "Bloggers", 
      "Filmers", 
      "Engineers",
      "Priests", 
      "Historians", 
      "Politicians", 
      "Farmers",
      "YouTubers",
      "TikTokers"
    ];

    const liveStreams = [];
    const scheduledStreams = [];
    const allStreams = [
      [], // musiciansStreams 0
      [], // influencersStreams 1
      [], // itcreatorsStreams 2
      [], // scientistsStreams 3
      [], // entrepreneursStreams 4
      [], // actorsStreams 5
      [], // athletesStreams 6
      [], // comediansStreams 7
      [], // gamersStreams 8
      [], // modelsStreams 9
      [], // artistsStreams 10
      [], // authorsStreams 11
      [], // activistsStreams 12
      [], // lgbtStreams 13
      [], // bloggersStreams 14
      [], // filmersStreams 15
      [], // engineersStreams 16
      [], // priestsStreams 17
      [], // historiansStreams 18
      [], // politiciansStreams 19
      [], // farmersStreams 20
      [], // youtubersStreams 21
      []  // tiktokersStreams 22
    ];


    Babla.forEach((card) => {

      if(card.livestatus){
        liveStreams.push(
          <StreamCard 
            key={card.id}
            image={card.image}
            title={card.title}
            views={card.views}
            points={card.points}
            channel={card.channel}
            channelImage={card.channelImage}
            category={card.category}
            live={card.livestatus}
          />
        )
      }

      if(!card.livestatus){
        scheduledStreams.push(
          <StreamCard 
            key={card.id}
            image={card.image}
            title={card.title}
            views={card.views}
            points={card.points}
            channel={card.channel}
            channelImage={card.channelImage}
            category={card.category}
            live={card.livestatus}
            date={formatDate(card.date)}
          />
        )
      }

      for(let i=0; i < categories.length; i++){
        if(card.category === categories[i]){
          allStreams[i].push(
            <StreamCard 
              key={card.id}
              image={card.image}
              title={card.title}
              views={card.views}
              points={card.points}
              channel={card.channel}
              channelImage={card.channelImage}
              category={card.category}
              live={card.livestatus}
              date={formatDate(card.date)}
            />
          )
        }
      }
    });
    if(props.category === "Live Talks"){
      return (<>{liveStreams}</>)
    }
    if(props.category === "Scheduled"){
      return (<>{scheduledStreams}</>)
    }
    for(let i=0; i < categories.length; i++){
      if(props.category === categories[i]){
        return (<>{allStreams[i]}</>)
    }
  }
};




function Content(props) {
  
  if(Balu[props.id][props.category][0]['numberOfTalks']==="0"){
    return (
        <div className='content'>
            <h1>{props.category}</h1>
            <div className='streamCards'>
              <div className='noStreamsBlock'>
                <div className='noStreams'>Invite your favorite <span style={{fontWeight:"700"}}>influencers</span> to the <span style={{fontWeight:"700"}}>Umizgi</span> community, because there's nothing yet!</div>
                <RedButtonShare/>
              </div>
            </div>
        </div>
    )
  }
  
  else{
    return (
        <div className='content'>
            <h1>{props.category}</h1>
              <div className='streamCards'>
                <Card category={props.category}/>
              </div>
        </div>
    )
  }
};




export default Content