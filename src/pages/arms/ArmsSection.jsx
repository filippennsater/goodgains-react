import React from 'react';
import '../../App.css';
import './ArmsSection.scss';

function ArmsSection() {
    return (

        <div id="postflowWrapper">

            <div id="postflow">

                <br/>
                <center><texth1>Armar</texth1> <br/><br/>
                    <p2>Viktigt:</p2> <br/>
                    <p>Alla de set där antalet repetitioner inte nämns är 8-9 repetitioner vardera!</p></center>

                <div id="workoutsFlowText">

                    <div id="textBoxes">
                        <h3>Biceps</h3>
                        <h3>Barbell curl (stående):</h3>
                        Öka långsamt med 3 set som uppvärmning, försök sedan ta 3 set så högt du kan och gå ner i vikt 1 set.
                    </div>

                    <div id="textBoxes">
                        <h3>Alternate dumbbell curl:</h3>
                        3-4 set med lagom hög vikt.
                    </div>

                    <div id="textBoxes">
                        <h3>Hammer curl:</h3>
                        3-4 set med hög vikt i början därefter lägre vikt.
                    </div>


                    <div id="textBoxes">
                        <h3>Triceps</h3>
                        <h3>Rep, Push down:</h3>
                        3-4 set. (alla tricepsövningar kan man köra medelhögt-hög vikt)
                    </div>

                    <div id="textBoxes">
                        <h3>Rep, tricep extension (över huvudet):</h3>
                        3-4 set. (spola till 5:20)
                    </div>

                    <div id="textBoxes">
                        <h3>Enarms triceps push down:</h3>
                        3-4 set.
                        <h3>Klar!</h3>
                    </div>

                </div>



                <div id="workoutsFlowVideo">
                    <br />
                    <iframe title='vid1' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/kwG2ipFRgfo" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid2' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/8d2we4UqOSs" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid3' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/TwD-YGVP4Bk" frameborder="0" allowfullscreen></iframe>

                    <iframe title='vid4' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/vB5OHsJ3EME" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid5' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/bEDusgF5SGQ" frameborder="0" allowfullscreen></iframe>
                    <iframe title='vid6' width="120%" height="40%" align="right" src="https://www.youtube.com/embed/Zl46Cxc4DDs" frameborder="0" allowfullscreen></iframe>
                </div>

            </div>
        </div>

    )
}

export default ArmsSection