import React, { Component } from 'react'
import img3 from "../asset/3.jpeg"
import img4 from "../asset/4.png"
export default class Buoi3 extends Component {
    // state : sự thay đổi 
    state = {
        img: img3
    }

    render() {
        const changeImg = (imgs) => {
            this.setState({
                img: imgs
            })
        }
        return (
            <div>
                <h1 > hiển thị hình ảnh</h1>
                <img src={this.state.img} width={300} />
                <button onClick={() => changeImg(img4)} > thay đổi hình ảnh</button>
                <button onClick={() => changeImg(img3)} > thay đổi hình ảnh</button>
            </div>
        )
    }
}
