import React from 'react';
// import '../css/pages/create.css'
import PropsTypes from 'prop-types'



class PageCam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.setState({next: true} , () => console.log(this.state))
    this.props.clicked()
  }

  render() {
    return (
      <div className="container-center container-1">
        <div className="title">Take a picture</div>
        <div className="container-cam">
          <div className="frame">
            <div className="photo">
            </div>
          </div>
          <div className="action-cam">
          </div>
        </div>
        <a href="" onClick={this.onClick} className="button-primary action-1">Next</a>    
      </div>
    )
  }
}

class SelectChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      img: [
        'https://images.vexels.com/media/users/3/142608/isolated/preview/ff89ba95bf3c7b5743d58c0d8237bf62-green-tshirt-clothes-by-vexels.png',
        'http://www.pngall.com/wp-content/uploads/2016/07/Dress-Download-PNG.png',
        'http://www.pngall.com/wp-content/uploads/2016/03/Clothes-Free-Download-PNG.png',
        'https://i.pinimg.com/736x/16/05/13/160513c9eca748dda30c002201c87ba7--girls-uniforms-school-uniforms.jpg',
        'http://wfarm1.dataknet.com/static/resources/icons/set111/a17b698.png'
      ]
    };
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  next(e) {
    e.preventDefault()
    this.setState({ index: this.state.index + 1 } , () => console.log(this.state))
  }

  prev(e) {
    e.preventDefault()
    this.setState({ index: this.state.index - 1 } , () => console.log(this.state))
  }

  render() {
    const { img , index } = this.state
    let curent = index
    return (
      <div className="container-center container-2">
        <div className="img-1" style={{backgroundImage: `url(${this.state.img[curent]})`}}></div>
        <div className="img-2" style={{backgroundImage: `url(${this.state.img[curent+2]})`}}></div>
        <div className="container-character">
          <a href="" className="btn btn-danger prev" onClick={this.prev} >Prev</a>
          <div className="character"></div>
          <div className="clothes" style={{backgroundImage: `url(${this.state.img[index+1]})`}}></div>
          <a href="" className="btn btn-primary next" onClick={this.next}>Next</a>
        </div>
      </div>
    )
  }
}

const ProgressBar = props => 
  <div className="progress-bar">
    <div className="bar">
      <div className="inner-bar bar-1"></div>
    </div>
    <div className="bar">
      <div className="inner-bar bar-2"></div>
    </div>
    <div className="bar">
      <div className="inner-bar bar-3"></div>
    </div>
    <div className="bar">
      <div className="inner-bar bar-4"></div>
    </div>  
  </div>

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select_char: false
    }
    this.click = this.click.bind(this)
  }

  click() {
    this.setState({select_char: true})
  }

  componentDidUpdate() {
    console.log()
  }

  render() {
    const { select_char } = this.state
    return (
      <div> 
        {select_char ? <SelectChar /> :  <PageCam clicked={this.click}/> }
        <ProgressBar />
      </div>
    );
  }
}

PageCam .propTypes = {
  clicked: PropsTypes.func
}