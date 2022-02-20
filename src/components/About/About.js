import React from 'react'
import "./About.scss";

function About() {
  return (
    <div className="wrap">
        <h1>An online Pomodoro Timer to boost your productivity</h1>
        <div>
            <h2>What is Pomofocus?</h2>
            <p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <a href="https://francescocirillo.com/pages/pomodoro-technique" className="highlighted-p" target="_blank" rel="noopener">Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.</p>
        </div>
        <div>
            <h2>What is Pomodoro Technique?</h2>
            <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" className="highlighted-p" target="_blank" rel="noopener">Wikipedia</a></p>
        </div>
        <div>
            <h2>How to use the Pomodoro Timer?</h2>
            <ol>
                <li> <span className="highlighted-span">Add tasks</span> to work on today</li>
                <li><span className="highlighted-span">Set estimate pomodoros</span> (1 = 25min of work) for each tasks</li>
                <li><span className="highlighted-span">Select a task</span> to work on</li>
                <li><span className="highlighted-span">Start timer</span> and focus on the task for 25 minutes</li>
                <li><span className="highlighted-span">Take a break</span> for 5 minutes when the alarm ring</li>
                <li><span className="highlighted-span">Iterate</span> 3-5 until you finish the tasks</li>
            </ol>
        </div>
        <div>
            <h2>Features</h2>
            <ul>
                <li><span className="highlighted-span"> Responsive design</span> that works with desktop and mobile</li>
                <li><span className="highlighted-span">Color transition</span> to switch moods between work time and rest time</li>
                <li><span className="highlighted-span">Audio notification</span> at the end of a timer period</li>
                <li><span className="highlighted-span">Customizable timer</span> intervals to suit your preference</li>
            
            </ul>
        </div>
        <div className="mb-5">
            <h2>Download App</h2>
            <ul>
                <li><a href="/downloadable/pomofocus-darwin-x64-1.1.0.zip" download=""><span className="highlighted-a">For macOS</span></a> (zip file)</li>
                <li><a href="/downloadable/pomofocus-1.1.0 Setup.exe" download=""><span className="highlighted-a">For Windows</span></a> (exe file)</li>
            </ul>
        </div>
    </div>
  )
}

export default About