import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2></h2>


            <div className='mx-28 my-20'>
                <h2 className='text-2xl'>Q: What are the different ways to manage a state in a React application?</h2>
                <p>Answer: <br />There are four main types of state you need to properly manage in your React apps:- <br />
                    1. Local state. <br />
                    2. Global state. <br />
                    3. Server state. <br />
                    4. URL state. <br />
                </p>
                <br />
                <h2 className='text-2xl'>Q: How does prototypical inheritance work?</h2>
                <p>Answer: <br />JThe Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                </p>
                <br />
                <h2 className='text-2xl'>Q: What is a unit test? Why should we write unit tests?</h2>
                <p>Answer: <br />
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>

                <br />
                <h2 className='text-2xl'>Q: React vs. Angular vs. Vue?</h2>
                <p>Answer: <br />
                    React:- <br />
                    1. Fast loading of new data. <br />
                    2. One file contains both markup and logic (JSX). <br />
                    3. Enables the separation of data and presentation. <br />
                    4. It’s simple to get started and doesn’t take much practice. <br />
                    Angular:- <br />
                    1. Allows MVC architecture. <br />
                    2. Good maintainability. <br />
                    3. Web applications built with Angular perform very well. <br />
                    4. Angular lets you manage microfrontend architecture. <br />.
                    Vue:- <br />
                    1. Flexibility and simplicity in the utilization. <br />
                    2. Thorough documentation. <br />
                    3. The possibility of Component-Based Architecture. (CBA) <br />
                    4. A list of tools and libraries. <br />
                    <br />.
                </p>
            </div>

        </div>
    );
};

export default Blog;