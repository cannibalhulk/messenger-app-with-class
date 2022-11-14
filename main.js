function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}



class Message {
    constructor(_author, _text){
        this.author=_author;
        this.text = _text;
        this.time=gettime();
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    toString(){
        return `${this.time} ${this.author}: ${this.text}`;
    }

}

class Messenger extends Message{
    constructor(_author, _text){
        super(_author,_text)

        this.time=gettime();
        this.messages=[]
    }

    send(author,text){
        this.messages.push(`${this.gettime()} ${author}: ${text}`);
    }

    show_history(){
        for(let message of this.messages){
            console.log(message);
        }
    }
    
}

let message1 = new Message();
message1.toString()

let messenger = new Messenger();
messenger.send('Shukur','salam,necesiz?');
messenger.send('Almaz','gencler necesiz');
messenger.send('Ismayil','bu gun layihe teqdimati var?');

messenger.show_history()