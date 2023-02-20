import Illustration from '../assets/img/illustration-mockups.svg'
import './Main.css'

 export function Main(){
    return(
        <div>
            <section class="info">
                <div className="info-project">
                    <div className="info-project-ilustration">
                        <img src={Illustration} alt="ilustration"/>
                    </div>

                    <div className="info-register">
                        <h1>Build The Community <br/> Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You have <br/> a voice, but so does your audience. Create connections with <br/> your users as you engage in genuine discussion. Register </p>
                        <button>Register</button>
                    </div>
                </div>
             </section>
        </div>
    )
}