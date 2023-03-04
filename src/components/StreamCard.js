import React from 'react'
// import Avatar from '@mui/material/Avatar';
import '../styles/StreamCard.css';


  function StreamCard({image, title, views, points, channel, category, live, date}) {
    return (
        <div className='card'>
            <div className='streamCard_thumbnail_info'>
                <img
                    className='streamCard_thumbnail'
                    src={image}
                    alt={title}
                />
                {live ? 
                <>
                    <div className='streamCard_thumbnail_text liveIcon'>LIVE</div>
                    <div className='streamCard_thumbnail_text numberViews'><span style={{fontWeight:"700"}}>{views}</span> watching</div>
                    <div className='streamCard_thumbnail_text amountPoints'>from <span style={{fontWeight:"700"}}>{points}</span> coins</div>
                </> 
                : 
                <>
                    <div className='streamCard_thumbnail_text scheduledIcon'>SOON</div>
                    <div className='streamCard_thumbnail_text numberViews'>planned <span style={{fontWeight:"700"}}>{date}</span></div>
                    <div className='streamCard_thumbnail_text amountPoints'>from <span style={{fontWeight:"700"}}>{points}</span> coins</div>
                </>
                }
            </div>

            <div className='streamCard_info'>
                <div className='streamCard_text' title={title}>
                    <h4>{title}</h4>
                    <div>
                        <div title={channel}>{channel}</div>
                            <span className="dot"></span>
                        <div title={category}>{category}</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  
export default StreamCard