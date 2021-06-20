import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from './Title'

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktail',
                info:'lorem gorknd jajkmadn, for each beer greet them for me greet cocktail'
            },
            {
                icon: <FaHiking />,
                title: 'free cocktail',
                info:'lorem gorknd jajkmadn, for each beer greet them for me greet cocktail'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free cocktail',
                info:'lorem gorknd jajkmadn, for each beer greet them for me greet cocktail'
            },
            {
                icon: <FaBeer />,
                title: 'free cocktail',
                info:'lorem gorknd jajkmadn, for each beer greet them for me greet cocktail'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return<article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>
                    })}
                </div>
            </section>
        )
    }
}
