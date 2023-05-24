import React from 'react';
import '../../App.css';
import './ChestSection.scss';

function ChestSection() {
    return (
        <div id="postflowWrapper">

            <div id="postflow">

                <br />
                <center><texth1>Bröst</texth1> <br /><br />
                    <h3>Viktigt:</h3>
                    <p>Alla de set där antalet repetitioner inte nämns är 8-9 repetitioner vardera!</p></center>

                <div id="workoutsFlowText">

                    <div id="textBoxes">
                        <h3>Uppvärmning:</h3>
                        <p>Crosstrainer mellanhögt 5 min + axelflys med låg vikt 2 set med mellan 12-20 repetitioner vardera.</p>
                    </div>


                    <div id="textBoxes">
                        <h3>Bröst-press fria vikter:</h3>
                        <p>Öka långsamt med 3 set som uppvärmning, försök sedan ta 3 set så högt du kan (med bra form) och därefter kör ett sista med 60% av din maxvikt och gör så många repetitioner du kan.</p>
                    </div>


                    <div id="textBoxes">
                        <h3>Incline-press fria vikter:</h3>
                        <p>3 set med lagom hög vikt (lätt att skada sig om man presser för hårt för det är mer axlar).</p>
                    </div>

                    <div id="textBoxes">
                        <h3>Decline press maskin:</h3>
                        <p>3 set med hög vikt (lägg märke till att det ska kännas som du trycker ner under övningen).</p>
                    </div>

                    <div id="textBoxes">
                        <h3>Chest flys rak med rep:</h3>
                        <p>3 set, var försiktig och håll koll på att inte påfresta axlar för mycket.</p>
                    </div>

                    <div id="textBoxes">
                        <h3>Chest flys underifrån:</h3>
                        <p>3 set, var försiktig och håll koll på att inte påfresta axlar för mycket.</p>
                        <h3>Klar!</h3>
                    </div>

                </div>

                <div id="workoutsFlowVideo">
                    <br />
                    <iframe title='vid1' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/9YiT_U_-wvU" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid2' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/VmB1G1K7v94" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid3' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/8iPEnn-ltC8" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid4' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/51NIR38Iq-w" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid5' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/WEM9FCIPlxQ" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid6' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/M1N804yWA-8" frameborder="0" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
}

export default ChestSection