import React from "react";




class Compliment extends React.Component{
    constructor(){
        super()
        this.state ={
            text: ""
        }
        this.Adjective = this.Adjective.bind(this);
        this.Adjective2 = this.Adjective2.bind(this);
        this.Part = this.Part.bind(this);
        this.Place = this.Place.bind(this);
        this.Thing = this.Thing.bind(this);
        this.Bouns = this.Bouns.bind(this);
        this.Generator = this.Generator.bind(this);
    }

    Adjective(){
        const things = ["amazing", "great", "kind", "awesome", "beautiful", "lovely", "brave", "cool", "spectacular", "fantastic", "fabulous", "brilliant", "exceptional", "marvellous", "terrific", "outstanding", "cute", "epic"];
        const randomThing = Math.floor(Math.random() * things.length);
        return things[randomThing];
    }
    
    Adjective2(){
        const things = ["most amazing", "greatest", "kindest", "most awesome", "most beautiful", "loveliest", "bravest", "coolest", "nicest", "best", "most fantastic", "most fabulous", "most brilliant", "most exceptional", "cutest", "most epic"];
        const randomThing = Math.floor(Math.random() * things.length);
        return things[randomThing];
    }
    
    Part(){
        const things = ["personality", "smile", "laugh", "face", "attitude", "skill", "power", "hairstyle", "positivity"];
        const randomThing = Math.floor(Math.random() * things.length);
        return things[randomThing];
    }
    
    Place(){ 
        const things = ["world", "universe", "galaxy", "country", "whole wide world", "all the galaxy"];
        const randomThing = Math.floor(Math.random() * things.length);
        return things[randomThing];
    }
    
    Thing(){
        const things = ["love", "kindness", "beauty", "friendship", "skill", "personality"];
        const randomThing = Math.floor(Math.random() * things.length);
        return things[randomThing];
    }
    
    Bouns(){
        const things = ["it's not funny", "please teach me", "I can't even right now", "which makes me so happy", "which is so cool", "it's hard not to be jealous"];
        const randomThing = Math.floor(Math.random() * things.length);
        return things[randomThing];
    }
    
    Generator(){
        const starts = ["You ", "I love ", "How ", "Thank you ", "You're "];
        const startsnum = Math.floor(Math.random() * starts.length);
    
        let middle1 = "";
        let middle2 = "";
        let middle3 = "";
    
        if(startsnum === 0){
            middle1 = "are ";    
            middle2 = "have ";
            middle3 = "will ";
        }else if(startsnum === 1){
            middle1 = "your ";
            middle2 = "you ";
            middle3 = "the ";
        }else if(startsnum === 2){
            middle1 = "are you ";
            middle2 = "can you ";
            middle3 = "will you ";
        }else if(startsnum === 3){
            middle1 = "for ";
            middle2 = "and your ";
            middle3 = " ";
        }else if(startsnum === 4){
            middle1 = "the ";
            middle2 = "so ";
            middle3 = "just ";
        }
        const middle = [middle1, middle2, middle3];
        const middlenum = Math.floor(Math.random() * middle.length);
    
    
        let end1 = ""; 
        let end2 = "";
        let end3 = "";
        let end4 = "";
    
        if(middlenum === 0){
            if (middle1 === "are "){
                end1 = `the ${this.Adjective2()}`;
                end2 = `${this.Adjective()}`;
                end3 = `soooo ${this.Adjective()}, ${this.Bouns()}`;
                end4 = `the ${this.Adjective2()} in the ${this.Place()}`;
            }else if(middle1 === "your "){
                end1 = this.Part();
                end2 = `${this.Adjective()} ${this.Part()}`;
                end3 = `${this.Part()} because it's the ${this.Adjective2()}`;
                end4 = `${this.Part()} because it's so ${this.Adjective()}`;
            }else if(middle1 === "are you "){
                end1 = `so ${this.Adjective()}`;
                end2 = `that ${this.Adjective()}`;
                end3 = `the ${this.Adjective2()} in the ${this.Place()}`;
                end4 = `this ${this.Adjective()}`;
            }else if(middle1 === "for "){
                end1 = "existing";
                end2 = `being ${this.Adjective()}`;
                end3 = `being the ${this.Adjective2()} in the ${this.Place()}`;
                end4 = `having such a ${this.Adjective()} ${this.Part()}`;
            }else if(middle1 === "the "){
                end1 = `${this.Adjective2()} in the ${this.Place()}`;
                end2 = `${this.Adjective2()}`;
                end3 = `${this.Adjective2()}, ${this.Bouns()}`;
                end4 = `${this.Adjective2()}, which is so ${this.Adjective()}`;
            }
        }
    
        if (middlenum === 1){
            if(middle2 === "have "){
                end1 = `the ${this.Adjective2()} ${this.Part()}!`;
                end2 = `so much ${this.Thing()}!`;
                end3 = `the ${this.Adjective2()} ${this.Thing()}!`;
                end4 = `the ${this.Adjective2()} ${this.Part()} in the ${this.Place()}!`;
            }else if(middle2 === "you "){
                end1 = "sooooo much!";
                end2 = `as much as the ${this.Place()}!`;
                end3 = "more then anything!";
                end4 = "";
            }else if(middle2 === "can you "){
                end1 = `be so ${this.Adjective()}!`;
                end2 = `have the ${this.Adjective2()} ${this.Part()}!`;
                end3 = `be the ${this.Adjective2()}!`;
                end4 = `be the most ${this.Adjective()} in the ${this.Place()}!`;
            }else if(middle2 === "and your "){
                end1 = `${this.Adjective()} ${this.Part()}!`;
                end2 = `never ending ${this.Thing()}!`;
                end3 = `${this.Thing()}!`;
                end4 = `${this.Adjective()} ${this.Thing()}!`;
            }else if(middle2 === "so "){
                end1 = `freakin ${this.Adjective()}!`;
                end2 = `${this.Adjective()}!`;
                end3 = `${this.Adjective()}, ${this.Bouns()}!`;
                end4 = `freakin ${this.Adjective()}, ${this.Bouns()}!`;
            }
        }
    
        if (middlenum === 2){
            if(middle3 === "will "){
                end1 = `do ${this.Adjective()} things!`;
                end2 = `be ${this.Adjective()} forever!`;
                end3 = `do so much for the ${this.Place()}!`;
                end4 = "have my love forever!";
            }else if(middle3 === "the "){
                end1 = `way your ${this.Part()} works!`;
                end2 = `way you look its so ${this.Adjective()}!`;
                end3 = `${this.Thing()} that is in you!`;
                end4 = `way your always the ${this.Adjective2()} in the ${this.Place()}!`;
            }else if(middle3 === "will you "){
                end1 = `stay this ${this.Adjective()}!`;
                end2 = `always be so ${this.Adjective()}!`;
                end3 = `always be the ${this.Adjective2()}!`;
                end4 = `stay the ${this.Adjective2()}!`;
            }else if(middle3 === " "){
                end1 = "so much!";
                end2 = `for always being ${this.Adjective()}!`;
                end3 = `for being the ${this.Adjective2()}!`;
                end4 = `for having a ${this.Adjective()} ${this.Thing()}!`;
            }else if(middle3 === "just "){
                end1 = `that ${this.Adjective()}!`;
                end2 = `the ${this.Adjective2()}!`;
                end3 = `the ${this.Adjective2()} in the ${this.Place()}!`;
                end4 = `that ${this.Adjective()}, ${this.Bouns()}!`;
            }
        }
        const end = [end1, end2, end3, end4];
        const endNum = Math.floor(Math.random() * end.length);
        this.setState({text: (starts[startsnum] + middle[middlenum] + end[endNum])})
    }

    componentDidMount(){
        this.Generator()
    }

    render(){
        return(
            <div>
                <div className="Compliment-Background">
                    <h1 className="Compliment">{this.state.text}</h1>
                </div>
                <button className="Button" onClick={this.Generator}>Generate</button>
            </div>
        )
    }
    
}

export default Compliment;