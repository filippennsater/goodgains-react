import React from 'react';
import '../../App.css';
import './BackSection.scss';

function BackSection() {
    return (
        <div id="postflowWrapper">

            <div id="postflow">

                <br/>
                <center><texth1>Rygg</texth1> <br/><br/>
                    <p2>Viktigt:</p2>
                    <p>Alla de set där antalet repetitioner inte nämns är 8-9 repetitioner vardera!</p></center>

                <div id="workoutsFlowText">

                    <div id="textBoxes">
                        <h3>Uppvärmning:</h3>
                        Rodd mellanhögt 5 min.
                    </div>


                    <div id="textBoxes">
                        <h3>Lat pulldown:</h3>
                        Öka långsamt med 3 set som uppvärmning, försök sedan ta 3 set så högt du kan och därefter gå ner i vikt 1 sista set. (spola till 0:50)
                    </div>


                    <div id="textBoxes">
                        <h3>Neutral grip lat pulldown:</h3>
                        3-4 set med lagom hög vikt, både brett och smalt handtag funkar (luta dig lite bakåt och dra in armbågarna, spola till 2:50).
                    </div>

                    <div id="textBoxes">
                        <h3>Sittande lats-drag:</h3>
                        3-4 set med lagom/hög vikt. (spola fram till 0:40)
                    </div>

                    <div id="textBoxes">
                        <h3>Trap bar deadlift:</h3>
                        3-4 set. Ifall denna övningen inte finns på ditt gym så gör vanliga deadlifts, bara att googla. (spola till 1:10)
                    </div>

                    <div id="textBoxes">
                        <h3>Back extensions:</h3>
                        3 set.
                        <h3>Klar!</h3>
                    </div>

                </div>

                <div id="workoutsFlowVideo">
                    <br/>
                    <iframe title='vid1' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/GrWEZbhpkoA" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid2' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/CAwf7n6Luuc" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid3' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/ImATh1ZTffc" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid4' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/GZbfZ033f74" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid5' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/WzvsIU9FW60" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid6' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/vx0jZBEmZcE" frameborder="0" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
}

export default BackSection