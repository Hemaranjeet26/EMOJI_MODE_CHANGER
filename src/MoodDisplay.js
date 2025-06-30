

function MoodDisplay({mood})
{
    const moods = {
        happy: "Keep Smiling! ",
        sad: "It's okay to be sad sometimes! ",
        excited: "Let's Celebrate! ",
        angry: "Take a deep breath! ",
    }
    return(
        <div className="box">
            {mood ? <p>{moods[mood]}</p> : <p>Choose a mood!</p>}
        </div>
    )
}

export default MoodDisplay;
