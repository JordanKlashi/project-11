function Profil() {


    const users = [
        {   user : "David Gérard",
            age : "25",
            argent : "2000 €"
        },
        {
            user : "Bertrand Gérard",
            age : "30",
            argent : "3000 €"
        }
    ]
    
        return(
            <>
                <p className="Profil-welcome">Welcome back</p>
                {users.map((utilisateur) => (
                    <p className="Profil-welcome">{utilisateur.user}!</p>
                ))}!
                <button className="Profil-edit">Edit name</button>
            </>
        )
    }
    export default Profil