// Traditionally===html page but in react===Component

const App = () => {
    //Basic syntax
    const element = <h2>Hello World</h2>;
    // Embedding Expressions
    const name = 'ReactJS Developer';
    const element2 = (
        <h1> 
            Hello {name} {2 + 2}
        </h1>
    );
    //JSX as an Expression 
    const element3 = (
        <div>
            <h1>Hello, World</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    return (
        <div>
            <h1>Hello, World</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
};

export default App;