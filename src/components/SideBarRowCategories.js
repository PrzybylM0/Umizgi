import React from 'react'
import SideBarRow from './SideBarRow'
import '../styles/SideBarRowCategories.css'
import Balu from "./DataInfo.json"
import { useState, useEffect } from 'react';

// number={Balu[0]["Musicians"][0]["numberOfTalks"]}   ==   6
// number={Balu[1]["Influencers"][0]["numberOfTalks"]}   ===  4
// number={Balu[2]["IT Creators"][0]["numberOfTalks"]}    === 10
// ...

function SideBarRowCategories() {

  const [position, setPosition] = useState(false);

  const handleClick = () => {
      setPosition(current => !current);
  }


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log()
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Tworzymy tablicę obiektów, gdzie każdy obiekt zawiera informacje o danym SideBarRow
  const sideBarData = [
    {
      id: 0,
      url: '/category/Musicians',
      enable: 1,
      icon: 'music_note',
      listName: 'Musicians',
      numberOfTalks: Balu[2]['Musicians'][0]['numberOfTalks']
    },
    {
      id: 1,
      url: '/category/Influencers',
      enable: 1,
      icon: 'emoji_people',
      listName: 'Influencers',
      numberOfTalks: Balu[3]['Influencers'][0]['numberOfTalks']
    },
    {
      id: 2,
      url: '/category/ITCreators',
      enable: 1,
      icon: 'memory',
      listName: 'IT Creators',
      numberOfTalks: Balu[4]['IT Creators'][0]['numberOfTalks']
    },
    {
      id: 3,
      url: '/category/Scientists',
      enable: 1,
      icon: 'science',
      listName: 'Scientists',
      numberOfTalks: Balu[5]['Scientists'][0]['numberOfTalks']
    },
    {
      id: 4,
      url: '/category/Entrepreneurs',
      enable: 1,
      icon: 'local_atm',
      listName: 'Entrepreneurs',
      numberOfTalks: Balu[6]['Entrepreneurs'][0]['numberOfTalks']
    },
    {
      id: 5,
      url: '/category/Actors',
      enable: 1,
      icon: 'Theater_Comedy',
      listName: 'Actors',
      numberOfTalks: Balu[7]['Actors'][0]['numberOfTalks']
    },
    {
      id: 6,
      url: '/category/Athletes',
      enable: 1,
      icon: 'Fitness_Center',
      listName: 'Athletes',
      numberOfTalks: Balu[8]['Athletes'][0]['numberOfTalks']
    },
    {
      id: 7,
      url: '/category/Comedians',
      enable: 1,
      icon: 'Sentiment_Very_Satisfied',
      listName: 'Comedians',
      numberOfTalks: Balu[9]['Comedians'][0]['numberOfTalks']
    },
    {
      id: 8,
      url: '/category/Gamers',
      enable: 1,
      icon: 'Sports_Esports',
      listName: 'Gamers',
      numberOfTalks: Balu[10]['Gamers'][0]['numberOfTalks']
    },
    {
      id: 9,
      url: '/category/Models',
      enable: 1,
      icon: 'Familiar_Face_And_Zone',
      listName: 'Models',
      numberOfTalks: Balu[11]['Models'][0]['numberOfTalks']
    },
    {
      id: 10,
      url: '/category/Artists',
      enable: 1,
      icon: 'Brush',
      listName: 'Artists',
      numberOfTalks: Balu[12]['Artists'][0]['numberOfTalks']
    },
    {
      id: 11,
      url: '/category/Authors',
      enable: 1,
      icon: 'Auto_Stories',
      listName: 'Authors',
      numberOfTalks: Balu[13]['Authors'][0]['numberOfTalks']
    },
    {
      id: 12,
      url: '/category/Activists',
      enable: 1,
      icon: 'eco',
      listName: 'Activists',
      numberOfTalks: Balu[14]['Activists'][0]['numberOfTalks']
    },
    {
      id: 13,
      url: '/category/LGBTQ+',
      enable: 1,
      icon: 'Transgender',
      listName: 'LGBTQ+',
      numberOfTalks: Balu[15]['LGBTQ+'][0]['numberOfTalks']
    },
    {
      id: 14,
      url: '/category/Bloggers',
      enable: 1,
      icon: 'Edit_Square',
      listName: 'Bloggers',
      numberOfTalks: Balu[16]['Bloggers'][0]['numberOfTalks']
    },
    {
      id: 15,
      url: '/category/Filmers',
      enable: 1,
      icon: 'Movie',
      listName: 'Filmers',
      numberOfTalks: Balu[17]['Filmers'][0]['numberOfTalks']
    },
    {
      id: 16,
      url: '/category/Engineers',
      enable: 1,
      icon: 'Engineering',
      listName: 'Engineers',
      numberOfTalks: Balu[18]['Engineers'][0]['numberOfTalks']
    },
    {
      id: 17,
      url: '/category/Priests',
      enable: 1,
      icon: 'Temple_Buddhist',
      listName: 'Priests',
      numberOfTalks: Balu[19]['Priests'][0]['numberOfTalks']
    },
    {
      id: 18,
      url: '/category/Historians',
      enable: 1,
      icon: 'History_Edu',
      listName: 'Historians',
      numberOfTalks: Balu[20]['Historians'][0]['numberOfTalks']
    },
    {
      id: 19,
      url: '/category/Politicians',
      enable: 1,
      icon: 'Assured_Workload',
      listName: 'Politicians',
      numberOfTalks: Balu[21]['Politicians'][0]['numberOfTalks']
    },
    {
      id: 20,
      url: '/category/Farmers',
      enable: 1,
      icon: 'Agriculture',
      listName: 'Farmers',
      numberOfTalks: Balu[22]['Farmers'][0]['numberOfTalks']
    },
    {
      id: 21,
      url: '/category/YouTubers',
      enable: 1,
      icon: 'person',
      listName: 'YouTubers',
      numberOfTalks: Balu[23]['YouTubers'][0]['numberOfTalks']
    },
    {
      id: 22,
      url: '/category/TikTokers',
      enable: 1,
      icon: 'person',
      listName: 'TikTokers',
      numberOfTalks: Balu[24]['TikTokers'][0]['numberOfTalks']
    }
  ];

  sideBarData.sort((a, b) => b.numberOfTalks - a.numberOfTalks);

  return (
    <div>
      {position ? (
        <>
          {sideBarData.map(item => (
            <SideBarRow
              key={item.id}
              count="1"
              id={item.id}
              url={item.url}
              enable={item.enable}
              icon={item.icon}
              listName={item.listName}
            />
          ))}
        </>
      ) : (
        <>
          {sideBarData.slice(0, 6).map(item => (
            <SideBarRow
              key={item.id}
              count="1"
              id={item.id}
              url={item.url}
              enable={item.enable}
              icon={item.icon}
              listName={item.listName}
            />
          ))}
        </>
      )}
      <button className="sidebar_show_button" onClick={handleClick}>
         <span className="material-symbols-outlined">{position ? 'Expand_Less' : 'Expand_More'}</span> 
         {windowWidth<500 ?
        <></>
         :
         <h3 className='show_more_or_less'>{position ? 'Show Less' : 'Show More'}</h3>
         }
         
      </button>
    </div>
  );
}

export default SideBarRowCategories





















































// function SideBarRowCategories() {

//     const [position, setPosition] = useState(false);

//     const handleClick = () => {
//         setPosition(current => !current);
//     }
//   return (
//     <div>
//         {position ? (
//          <>
//         <SideBarRow count="1" id="0" url="/category/Musicians" enable="1" icon="music_note" listName="Musicians"/>
//         <SideBarRow count="1" id="1" url="/category/Influencers" enable="1" icon="emoji_people" listName="Influencers"/>
//         <SideBarRow count="1" id="2" url="/category/ITCreators" enable="1" icon="memory" listName="IT Creators"/>
//         <SideBarRow count="1" id="3" url="/category/Scientists" enable="1" icon="science" listName="Scientists"/>
//         <SideBarRow count="1" id="4" url="/category/Entrepreneurs" enable="1" icon="local_atm" listName="Entrepreneurs"/>
//         <SideBarRow count="1" id="5" url="/category/Actors" enable="1" icon="Theater_Comedy" listName="Actors"/>
//         <SideBarRow count="1" id="6" url="/category/Athletes" enable="1" icon="Fitness_Center" listName="Athletes"/>
//         <SideBarRow count="1" id="7" url="/category/Comedians" enable="1" icon="Sentiment_Very_Satisfied" listName="Comedians"/>
//         <SideBarRow count="1" id="8" url="/category/Gamers" enable="1" icon="Sports_Esports" listName="Gamers"/>
//         <SideBarRow count="1" id="9" url="/category/Models" enable="1" icon="Familiar_Face_And_Zone" listName="Models"/>
//         <SideBarRow count="1" id="10" url="/category/Artists" enable="1" icon="Brush" listName="Artists"/>
//         <SideBarRow count="1" id="11" url="/category/Authors" enable="1" icon="Auto_Stories" listName="Authors"/>
//         <SideBarRow count="1" id="12" url="/category/Activists" enable="1" icon="eco" listName="Activists"/>
//         <SideBarRow count="1" id="13" url="/category/LGBTQ+" enable="1" icon="Transgender" listName="LGBTQ+"/>
//         <SideBarRow count="1" id="14" url="/category/Bloggers" enable="1" icon="Edit_Square" listName="Bloggers"/>
//         <SideBarRow count="1" id="15" url="/category/Filmers" enable="1" icon="Movie" listName="Filmers"/>
//         <SideBarRow count="1" id="16" url="/category/Engineers" enable="1" icon="Engineering" listName="Engineers"/>
//         <SideBarRow count="1" id="17" url="/category/Priests" enable="1" icon="Temple_Buddhist" listName="Priests"/>
//         <SideBarRow count="1" id="18" url="/category/Historians" enable="1" icon="History_Edu" listName="Historians"/>
//         <SideBarRow count="1" id="19" url="/category/Politicians" enable="1" icon="Assured_Workload" listName="Politicians"/>
//         <SideBarRow count="1" id="20" url="/category/Farmers" enable="1" icon="Agriculture" listName="Farmers"/>
//         <SideBarRow count="1" id="21" url="/category/YouTubers" enable="1" icon="person" listName="YouTubers"/>
//         <SideBarRow count="1" id="22" url="/category/TikTokers" enable="1" icon="person" listName="TikTokers"/>
//         </>
//         ) : (
//         <>
//         <SideBarRow count="1" id="0" url="/category/Musicians" enable="1" icon="music_note" listName="Musicians"/>
//         <SideBarRow count="1" id="1" url="/category/Influencers" enable="1" icon="emoji_people" listName="Influencers"/>
//         <SideBarRow count="1" id="2" url="/category/ITCreators" enable="1" icon="memory" listName="IT Creators"/>
//         <SideBarRow count="1" id="3" url="/category/Scientists" enable="1" icon="science" listName="Scientists"/>
//         <SideBarRow count="1" id="4" url="/category/Entrepreneurs" enable="1" icon="local_atm" listName="Entrepreneurs"/>
//         <SideBarRow count="1" id="5" url="/category/Actors" enable="1" icon="Theater_Comedy" listName="Actors"/>
//         </>
//       )}
      
//       <button className="sidebar_show_button" onClick={handleClick}>
//         <span className="material-symbols-outlined">{position ? 'Expand_Less' : 'Expand_More'}</span> 
//         <h3 className='show_more_or_less'>{position ? 'Show Less' : 'Show More'}</h3>
//       </button>
//     </div>
//   )
// }

// export default SideBarRowCategories
