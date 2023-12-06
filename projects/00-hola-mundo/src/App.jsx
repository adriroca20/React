import { TwitterFollowCard } from "./TwitterFollowCard"
import "./app.css"

export const App = ()=>{
    return (
        <section>
            <TwitterFollowCard tag={"@adrian_rocafull"} isFollowing={false}>
                <h1>Adrian</h1>
            </TwitterFollowCard>
            <TwitterFollowCard name={"Adrian2"} tag={"@adrian2_rocafull"} isFollowing={true}>
                <h1>Adrian</h1>
            </TwitterFollowCard>
            <TwitterFollowCard name={"Adrian3"} tag={"@adrian3_rocafull"} isFollowing={false}>
                <h1>Adrian</h1>
            </TwitterFollowCard>
        </section>
    )
}