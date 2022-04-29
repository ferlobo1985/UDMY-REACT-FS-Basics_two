import React,{ useState } from 'react'


const App = ({initialCount}) => {
    let [state, setState] = useState({
        count:initialCount,
        user:"Francis"
    });
    let [posts,setPosts] = useState([
        {
            name:"Super awesome hooks",
            body:"Everything you need for your hooks"
        }
    ]);



    // const addOne = () => {
    //     setCount(count + 1)
    // }

    const restOne = () => {
        setState( prevState => { 
           return { ...prevState, count: prevState.count - 1 }
        })
    }

    const addOnePost = () => {
        let newPost = {
            name:"Sugard is bad",
            body:"Coffee is good"
        }

        setPosts([
            ...posts,
            newPost
        ]);
    }


    return(
        <>
            <h1>{state.user}</h1>
            <h3>Count:{state.count}</h3>
            <button onClick={ () => setState({...state,count: state.count + 1 })}>Add one +1</button>
            <button onClick={ restOne }>Rest one -1</button>
            <button onClick={ () => setState(
                {...state,count: initialCount }
            ) }>RESET</button>

            <hr/>

            { posts.map((item,i)=>(
                <div key={i}>
                    <div>Name:{item.name}</div>
                    <div>Body:{item.body}</div>
                    <hr/>
                </div>
            ))}
            <button onClick={addOnePost}>Add one more</button>


        </>
    )
}

export default App;