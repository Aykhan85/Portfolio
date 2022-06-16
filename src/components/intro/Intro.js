import './intro.scss'
import Typewriter from 'typewriter-effect';
export default function Intro() {

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/man.png' alt='man' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Aykhan Nematov</h1>
                    <h3>Freelance <span>
                        <Typewriter
                            options={{
                                strings: ['Developer', 'Designer', 'Content creator'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='down' />
                </a>
            </div>
        </div>
    )
}
