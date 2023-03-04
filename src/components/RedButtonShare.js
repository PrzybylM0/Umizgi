import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/RedButtonShare.css';
import { FacebookMessengerShareButton, FacebookShareButton, TwitterShareButton, RedditShareButton, WhatsappShareButton,  TelegramShareButton} from "react-share";
import { FaReddit, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaFacebookMessenger, FaWhatsapp, FaTelegram } from "react-icons/fa";

function RedButtonShare() {
    const buttonStyle = {
      height: "2.3rem",
      width: "10rem",
      backgroundColor: "#B43A3A",
      borderRadius: "0.5rem",
      color: "#ffffff",
      fontSize: ".8rem",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "2rem",
      cursor: "pointer",
      border:"none",
      margin:"auto",
      marginTop:"2rem"
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const linkToCopy = "https://www.umizgi.com";
    const titleShare = "aaa";

    const copyLinkToClipboard = () => {
        navigator.clipboard.writeText(linkToCopy);
        setCopied(true);
    };

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  
  

    return (
        <>
        <button onClick={handleButtonClick} style={buttonStyle}>
            INVITE SOMEONE
        </button>

        <Modal 
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            className="ReactModal__Content"
            overlayClassName="ReactModal__Overlay"
        >
            <h2 className="Modal__Title">Share</h2>
            <p className="Modal__Content">As a post</p>

            <div className="social-media">
                    <div className='social-media-square'>    
                        <FacebookShareButton url={linkToCopy}>
                            <FaFacebook style={{color:'#4267B2', padding:"1rem"}}/>
                            <div className="social-media-text">Facebook</div>
                        </FacebookShareButton>
                    </div>
                {/* WYMAGANA REJERSTRACJA !!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* WYMAGANA REJERSTRACJA !!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div className='social-media-square'>   
                    <FaInstagram style={{color:'#FD1D1D', padding:"1rem"}}/>
                    <div className="social-media-text">Instagram</div>
                </div> 
                {/* WYMAGANA REJERSTRACJA !!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* WYMAGANA REJERSTRACJA !!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div className='social-media-square'>
                    <FaTiktok style={{padding:"1rem"}}/>
                    <div className="social-media-text">TikTok</div>
                </div>
                    <div className='social-media-square'>
                        <TwitterShareButton url={linkToCopy} title={titleShare}>
                            <FaTwitter style={{color:'#1DA1F2', padding:"1rem"}}/>
                            <div className="social-media-text">Twitter</div>
                        </TwitterShareButton>
                    </div>
            </div>

            <p className="Modal__Content">As a message</p>
            <div className="social-media1">
                    <div className='social-media-square' > 
                        <FacebookMessengerShareButton url={linkToCopy}>
                            <FaFacebookMessenger style={{color:'#00B2FF', padding:"1rem"}}/>
                            <div className="social-media-text">Messenger</div>
                        </FacebookMessengerShareButton>
                    </div>
                    <div className='social-media-square'> 
                        <WhatsappShareButton url={linkToCopy} title={titleShare}>
                            <FaWhatsapp style={{color:'#25D366', padding:"1rem"}}/>
                            <div className="social-media-text">Whatsapp</div>
                        </WhatsappShareButton>
                    </div>
                    <div className='social-media-square'>  
                        <TelegramShareButton url={linkToCopy} title={titleShare}>
                            <FaTelegram style={{color:'#2AABEE', padding:"1rem"}}/>
                            <div className="social-media-text">Telegram</div>
                        </TelegramShareButton>
                    </div>
                    <div className='social-media-square'>  
                        <RedditShareButton url={linkToCopy} title={titleShare}>
                            <FaReddit style={{color:'#FF5700', padding:"1rem"}}/>
                            <div className="social-media-text">Reddit</div>
                        </RedditShareButton>  
                    </div>
            </div>

            <p className="Modal__Content">Or copy link</p>

            <div className="link-container">
                <a href={linkToCopy} target="_blank" rel="noopener noreferrer">
                    {linkToCopy}
                </a>
                <button onClick={copyLinkToClipboard}>{copied ? "COPIED" : "COPY"}</button>
                </div>
            <button className="Modal__CloseButton" onClick={handleCloseModal}>
                <div style={{fontSize:"2rem"}} className="material-symbols-outlined">cancel</div> 
            </button>
        </Modal>
        </>
    );
  }

export default RedButtonShare