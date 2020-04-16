 import React , {useState , useEffect , createContext} from 'react';

 const UserContext = createContext([
        {
            firstName: "bob",
            lastName:"Bobberson",
            suffix:1,
            email : "bobberson@example.com"
        },

        obj => obj
 ]);

 const LevelFive = () => {
     const [user , setUser] = useContext(UserContext);

     return(

        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button
               onClick = {() =>   { setUser(Object.assign({} , user , {suffix:user.suffix + 1})) }}
            >
             Increment
            </button>
       </div>
        
     )
   
}




 const LevelFour = () => {
    <div>
        <h3>
            fourth level
        </h3>
        <LevelFive/>
    </div>
}


const LevelThree = () => {
    <div>
        <h3>
            third level
        </h3>
        <LevelFour/>
    </div>
}



 const LevelTwo = () => {
     <div>
         <h2>
             second level
         </h2>
         <LevelThree/>
     </div>
 }


const ContextComponent = () =>{
    const userState = useState({
        firstName:"Bob",
        lastName:"jameson",
        suffix:1,
        email:'jamesjameson@example.com'
    });

    return (
        <UserContext.Provider value={userState}>
            <h1>firat level</h1>
            <LevelTwo />
        </UserContext.Provider>
    )
}