import React from 'react';
import AddserviceCard from '../Addservice/AddserviceCard';

const Blog = () => {
    return (
        <div>
            {/* <AddserviceCard></AddserviceCard> */}
            <div className='m-10'>
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>Difference between SQL and NOSQL?</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p> SQL</p>
                        <p> These databases have fixed or static or predefined schema</p>
                        <p> These databases are not suited for hierarchical data storage.</p>
                        <p> Vertically Scalable</p>
                        <p> Follows ACID property</p>
                        <br />
                        <p> NOSQL</p>
                        <p> Non-relational or distributed database system.</p>
                        <p> These databases are best suited for hierarchical data storage.</p>
                        <p> These databases are not so good for complex queries</p>
                        <p> Follows CAP(consistency, availability, partition tolerance)</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group mt-5">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>What is JWT, and how does it work?</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">

                        <p>Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>

                        <br />
                        <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>


                    </div>
                </div>
                <div tabIndex={0} className="collapse group mt-5">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>What is the difference between javascript and NodeJS?</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

                    </div>
                </div>
                <div tabIndex={0} className="collapse group mt-5">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>How does NodeJS handle multiple requests at the same time?</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog; 