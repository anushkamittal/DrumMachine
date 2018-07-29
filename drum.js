const data =[
  { id:'snare' , letter:'Q' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  { id:'bass' , letter:'W' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  { id:'bongo' , letter:'E' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  { id:'tom tom' , letter:'A' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  { id:'bass 3' , letter:'S' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  { id:'shot gun' , letter:'D' , src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  { id:'high hat' , letter:'Z' , src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  { id:'drum hit ' , letter:'X' , src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  { id:'laser' , letter:'C' , src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
]

class Drumpad extends React.Component {
  
  componentDidMount(){
  document.addEventListener('keydown',this.handlekeydown)  
  }
  
  componentWillUnMount(){
    document.removeEventListener('keydown',this.handlekeydown)
  }
  
  handlekeydown =(e) =>{
    if(e.keyCode === this.props.letter.charCodeAt()){
      this.audio.play()
    this.audio.currenttime=0
    this.props.handledisplay(this.props.id)
    }
  }
  
  handleclick =() =>{
    this.audio.play()
    this.audio.currenttime=0
    this.props.handledisplay(this.props.id)
  }
  render(){
    return (
       <div className="drum-pad" id={this.props.id} onClick={this.handleclick}>
        <h1>{this.props.letter}</h1>
        <audio
          ref={ref =>this.audio =ref}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
          >
        </audio>
      </div> 
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display:''
    }
  }
  click(){
    this.audio.pause()
  }
  handledisplay=(display) =>this.setState({display:display})
  render(){
    return(
    <div id="drum-machine">
        <div id="buttons">
        <div id="drum-pads">
        {data.map (d=>(
          <Drumpad id={d.id} letter={d.letter} src={d.src}
            handledisplay={this.handledisplay} />
          ))}
        </div> 
          </div>
          <div id="extra">
          <div id="display">{this.state.display}</div>
          </div>
        
    </div>
    )
  }
};

ReactDOM.render(<App />,document.getElementById('root'));
