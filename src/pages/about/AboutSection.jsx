import React from 'react';
import '../../App.css';
import './AboutSection.scss';

function AboutSection() {
    return (
        <div className='hero-container'>

            <div className='postflow'>

                <div className='aboutContent'>

                    <figure className="aboutPic" />

                    <h8> <br /><br /><br />
                        Denna sidan gjordes av mig, aka Filip Pennsäter.<br />
                        Jag har alltid haft ett brinnande intresse för träning och haft många med och motgångar.<br />
                        Så jag har valt att dela med mig av min erfarenhet och sammanställt ett välfungerande tränings-schema.<br />
                        Den är dock inte 100% perfekt och även jag gör månadsvis förändringar.<br />
                        Tänk på att inte pressa på för hårt, skador och ineffektiva set kommer bara hålla dig tillbaka ännu mer.<br />
                        Kör så pass tungt att du fortfarande kan kontrollera vikten perfekt, dvs låt inte vikten kontrollera dig!<br />
                        Önskar er härliga pass och bra resultat!<br /><br />
                        Mvh Filip</h8>
                </div>

            </div>

        </div>
    )
}

export default AboutSection