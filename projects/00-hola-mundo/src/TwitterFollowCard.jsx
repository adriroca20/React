import "./index.css"

export const TwitterFollowCard = ()=>{
    return (
            <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img 
                    src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740" 
                    alt="avatar kikobeats"
                    className="tw-followCard-img" 
                    />
                    <div className="tw-followCard-info">
                        <strong>Adrian Rocafull</strong>
                        <span>@adrianrocafull</span>
                    </div>
                </header>
                <aside className="tw-followCard-button">
                    <button>Seguir</button>
                </aside>
            </article>
    )
}